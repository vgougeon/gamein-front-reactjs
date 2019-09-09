import React, { Component } from 'react';
import axios from 'axios';
import './likeOst.scss';

class LikeOST extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            liked: props.liked,
            likes: props.likes,
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps !== this.props){
            this.setState({
                likes: this.props.likes,
                liked: this.props.liked
            })
            return true
        }
        if(nextState.likes !== this.state.likes || nextState.liked !== this.state.liked)
            return true
        return false
    }
    like = () => {
        axios.post('http://54.37.228.12/api/likeOst', { id: this.props.id})
        .then(res => {
            if(res.status === 200){
                this.setState(prevState => {
                    return { 
                        likes: prevState.likes + res.data,
                        liked: (res.data === -1) ? false : true
                    };
                });
            }
        })
    }
    render() { 
        return (  
            <React.Fragment>
            <div className="like-ost-container" onClick={ this.like }>
                { this.state.likes !== undefined &&
                <span className="like-ost-count">{ this.state.likes }</span>
                }
                { this.state.liked ?
                <i className="fas fa-heart like liked" />
                :<i className="far fa-heart like" />
                }
            </div>
            </React.Fragment>
        );
    }
}
export default LikeOST;