import React, { Component } from "react";
import './newPost.scss';
import axios from "axios";
class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = { files: [], isLoading: false};
  }
  submitPost = (e) => {
    let self = this
    e.preventDefault();
    const data = new FormData(e.target);

    axios.post('http://api.njak.fr/newPost', data, 
    {onUploadProgress(progressEvent){
      self.setState({
        isLoading: (progressEvent.loaded / progressEvent.total) * 100
      })
    }},
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }})
      .then(res => {
        console.log(res.data)
        this.props.addPost([res.data]);
        self.setState({
          isLoading: false,
          files: []
        })
    })
  }

  changeFile = (e) => {
    if(e.target.files.length){
      this.setState({
        files: [...this.state.files, URL.createObjectURL(e.target.files[0])]
      })
    }
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
              <div className="prev_wrapper">
                <div className="preview">
                 <div className="del"><i className="fas fa-times"></i></div>
                <img alt="Media to upload" className='file' src={file} />
                </div>
              </div>
            ))}
            
          </div>
          <div className="textarea-tools">
            { this.state.isLoading &&
            <div className="textarea-loader" style={{ width: this.state.isLoading + '%' }}></div>
            }
            <input type="file" name="uploadImage" id="uploadImage" onChange={ this.changeFile }/>
            <div className="tool p-0">
              <label htmlFor="uploadImage" className="px-2 m-0 h-100 d-flex align-items-center">
                <i className="fas fa-image" /> Image
              </label>
            </div>
            <div className="tool p-0">
            <label htmlFor="submit" className="px-2 m-0 h-100 d-flex align-items-center">
              <i className="fas fa-paper-plane" /> Envoyer
            </label>
            <input type="submit" id="submit" className='d-none'></input>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default NewPost;
