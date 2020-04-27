import React, { Component } from "react";
import './comments.scss';
import axios from "axios";
import PostComments from './postComments/postComments';
import AnimateHeight from 'react-animate-height';
import { getAvatarUrl } from "../../../../services/profile/avatarService";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            idpost: this.props.idpost,
            height: 0
        }
    }

    componentDidMount() {
        this.appendComments();
    }

    getComments() {
        return axios.get("/api/getComments?post=" + this.state.idpost, {
        });
    }

    appendComments() {
        this.getComments().then(response => {
            if (response.data.length) {
                this.setState(state => ({
                    comments: [...this.state.comments, ...response.data],
                }));
            }
            this.setState({
                height: 'auto'
            })
        });
        
    }
    newComment = (data) => {
        this.setState(state => ({
            comments: [...this.state.comments, ...data]
        }));
    }
    render() {
        return (
            <AnimateHeight
            duration={ 300 }
            height={ this.state.height }
            >
            <div className={"box comments toggleOn"}>
                <div className="d-flex flex-column py-2" id="comment-container">
                    {this.state.comments.map((comment, index) => (
                        <div key={index + "-" + this.state.idpost} className="d-flex comment-item px-3 py-2">
                            <img className="small-avatar mr-2" src={getAvatarUrl(comment.avatar, this.props.username)} alt="" />
                            <div className="d-flex flex-column">
                                <a className="w-fit" href={"./user/" + comment.display_name}><span className="mb-0">{comment.username}</span></a>
                                <span>{comment.content}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <PostComments id={this.state.idpost} newComment={this.newComment} />
            </div>
            </AnimateHeight>

        );
    }
}
export default Comments;