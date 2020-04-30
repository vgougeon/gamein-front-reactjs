import React, { Component } from "react";
import { connect } from 'react-redux';
import axios from 'axios';
import './postComments.scss';
import TextArea from "../../../utils/textarea/textarea";

class PostComments extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          content: ""
        }
        this.handleChange = this.handleChange.bind(this)
      }
    submitComment = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        data.append("post_id", this.props.id);
        axios.post('/api/newComment', data).then(res => {
            if(res.status === 200){
                this.newCommentRef.reset();
                this.props.newComment(res.data)
            }
        })
    }
    handleChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
          [name]: value
        })
    }
    render() {
        if(this.props.auth){
            return(
            <form className="postComment-form" onSubmit={ this.submitComment } ref={(el) => this.newCommentRef = el }>
                <TextArea
                name="content"
                value={ this.state.content }
                onChange={ this.handleChange }
                placeHolder={"Commentez ici !"}
                />
                <div className="tool-bar">
                    <input type="submit" className="submit-comment ml-auto" value="Envoyer"/>
                </div>
            </form>
            );
            } else {
            return null
        }
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth.auth
})
export default connect(mapStateToProps)(PostComments)
