import React, { Component } from "react";
import './comments.scss';
import axios from "axios";
import PostComments from './postComments/postComments';

class Comments extends Component {
    constructor(props){
        super(props);
        this.state={comments: [],
            idpost: this.props.idpost
            }
    }

    componentDidMount(){
        this.appendComments();
    }

    getComments() {
        return axios.get("http://54.37.228.12/api/getComments?post="+this.state.idpost, {
        });
      }

      appendComments(){
        this.getComments().then(response => {
            if (response.data.length) {
              this.setState(state => ({
                comments: [...this.state.comments, ...response.data]
              }));
            }
          });
      }
    render() {
        return(
            <div className={"box comments " + ((this.props.active) ? "toggleOn" : "")}>
                <div className="px-g d-flex flex-column" id="comment-container">
                {this.state.comments.map((comment, index) => (
                    <div key={index + "-" + this.state.idpost} className="d-flex mt-g comment-item">
                        <img className="small-avatar mr-2" src={ "http://njak.fr/assets/imgs/accounts/" + comment.avatar } alt=""/>
                            <div className="d-flex flex-column">
                                <a className="w-fit" href={ "./user/" + comment.display_name }><span className="mb-0">{comment.username}</span></a>
                                    <span>{comment.content}</span>
                            </div>
                    </div>
                ))}
                </div>
                <PostComments />
            </div>
            

        );
    }
}
export default Comments;