import React, { Component } from "react";
import { UserContext } from '../../../../../services/auth/userProvider';
import './postComments.scss';

class PostComments extends Component {
    static contextType = UserContext;

    render() {
        return(
        <div className="textarea-post m-g d-flex align-items-center">
            <textarea className="p-g comment-textarea" name="content" placeholder="Commentez !" style={{overflow: 'hidden', overflowWrap: 'break-word', resize: 'none', height: '54px'}} />
            <input type="submit" className="submit-comment ml-2" value="Envoyer" />
        </div>
        );
    }
}
export default PostComments;