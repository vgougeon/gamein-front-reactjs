import React, { Component } from 'react';
import axios from 'axios';
import './likeOst.scss';
// const LikeOST = (props) => {
//     const like = () => {
//         axios.post('http://54.37.228.12/api/likeOst', { id: props.id})
//         .then(res => {
//             console.log(res)
//         })
//     }
//     return (
//         <React.Fragment>
//             <div className="like-ost-container" onClick={ like }>
//                 { props.likes !== undefined &&
//                 <span className="like-ost-count">{ props.likes }</span>
//                 }
//                 { props.liked ?
//                 <i className="fas fa-heart like liked" />
//                 :<i className="far fa-heart like" />
//                 }
//             </div>
//         </React.Fragment>
//     );
// }

class LikeOST extends Component {
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
    state = { 
        liked: this.props.liked,
        likes: this.props.likes,
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