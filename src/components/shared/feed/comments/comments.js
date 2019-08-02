import React, { Component } from "react";
import { UserContext } from '../../../../services/auth/userProvider';
import './comments.scss';
import axios from "axios";
import PostComments from './postComments/postComments';
class Comments extends Component {
    static contextType = UserContext;

    render() {
        return(
            <div className={"box comments " + ((this.props.active) ? "toggleOn" : "")}>
                <div className="px-g d-flex flex-column" id="comment-container">
                    <div className="d-flex mt-g comment-item">
                        <img className="small-avatar mr-2" src="http://njak.fr/assets/imgs/accounts/61563909495.png"/>
                            <div className="d-flex flex-column">
                                <a className="w-fit" href="#"><span className="mb-0">Njak</span></a>
                                    <span>ceci est un test design</span>
                            </div>
                    </div>
                </div>
                <PostComments />
            </div>
            

        );
    }
}
export default Comments;