import React, { Component } from "react";
import { UserContext } from '../../../../../services/auth/userProvider';
import axios from 'axios';
import './postComments.scss';

class PostComments extends Component {
    static contextType = UserContext;
    submitComment = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        data.append("post_id", this.props.id);
        console.log(data)
        axios.post('http://54.37.228.12/api/newComment', data).then(res => {
            if(res.status === 200){
                this.newCommentRef.reset();
                this.props.newComment(res.data)
            }
        })
    }
    render() {
        return(
        <form onSubmit={ this.submitComment } ref={(el) => this.newCommentRef = el }>
            <div className="textarea-post m-g d-flex align-items-center">
                <textarea className="p-g comment-textarea" name="content" placeholder="Commentez !" 
                style={{overflow: 'hidden', overflowWrap: 'break-word', resize: 'none', height: '54px'}}
                />
                <input type="submit" className="submit-comment ml-2" value="Envoyer"/>
            </div>
        </form>
        );
    }
}
export default PostComments;