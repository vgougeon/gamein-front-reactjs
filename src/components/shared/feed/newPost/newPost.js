import React, { Component } from "react";
import './newPost.scss';
import axios from "axios";
class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = { files: []};
  }
  submitPost = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    axios.post('http://api.njak.fr/newPost', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }})
      .then(res => {
      console.log(res.data);
    })
  }

  changeFile = (e) => {
    this.setState({
      files: [...this.state.files, URL.createObjectURL(e.target.files[0])]
    },
    () => {
      console.log(this.state.files)
    });
  }
  render() {
    return (
      <div className="box s-1 textarea-post mb-g">
        <form
          encType="multipart/form-data"
          onSubmit={ this.submitPost }
        >
          <textarea
            className="p-g"
            name="content"
            placeholder="Des choses à dire ?"
          />
          <div className="filePreview">
            {this.state.files.map(file => (
              <img className='file' src={file} />
            ))}
            
          </div>
          <div className="textarea-tools">
            <input type="file" name="uploadImage" id="uploadImage" onChange={ this.changeFile }/>
            <div className="tool p-0">
              <label htmlFor="uploadImage" className="px-2 m-0 h-100 d-flex align-items-center">
                <i className="fas fa-image" /> Image
              </label>
            </div>
            {/* <div className="tool send" type="submit">
              <i className="fas fa-paper-plane" /> Envoyer
            </div> */}
            <input type="submit"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default NewPost;
