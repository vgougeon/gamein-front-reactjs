import React, { Component } from "react";
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import './newPost.scss';
import axios from "axios";
import TextArea from "../../utils/textarea/textarea";
class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      file: null, 
      inputKey : Date.now(), 
      isLoading: false,
      content: ""
    };
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange = (event) => {
      const target = event.target
      const value = target.value
      const name = target.name
      this.setState({
        [name]: value
      })
  }
  submitPost = (e) => {
    let self = this
    e.preventDefault();
    const data = new FormData(e.target);
    

    axios.post('/api/newPost', data, 
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
        if(res.status === 200){
          this.newPostRef.reset();
          this.props.addPost([res.data]);
          self.setState({
            content: "",
            isLoading: false,
            file: null,
            inputKey : Date.now()
          })
        }
    })
  }

  changeFile = (e) => {
      this.setState({
        file: URL.createObjectURL(e.target.files[0])
      })
  }

  removeFile = () => {
    this.setState({ file : null,
      inputKey: Date.now() 
    });
  }

  render() {
    if(this.props.auth){
      const { t } = this.props;
      return (
        <div className="box s-1 textarea-post mb-g overflow-hidden">
          <form
            encType="multipart/form-data"
            onSubmit={ this.submitPost }
            ref={(el) => this.newPostRef = el }
          >
            <TextArea
            name="content"
            value={ this.state.content }
            onChange={ this.handleChange }
            placeHolder={t('newpost-placeholder')}
            />
            <div className="filePreview">
              {this.state.file &&
                <div className="prev_wrapper">
                  <div className="del fas fa-trash" onClick={ this.removeFile }></div>
                  <img alt="Media to upload" className='file' src={this.state.file} />
                </div>
              }
              
            </div>
            <div className="textarea-tools">
              { this.state.isLoading &&
              <div className="textarea-loader" style={{ width: this.state.isLoading + '%' }}></div>
              }
              <input type="file" name="uploadImage" id="uploadImage" key={ this.state.inputKey } onChange={ this.changeFile }/>
              <div className="tool p-0">
                <label htmlFor="uploadImage" className="px-2 m-0 h-100 d-flex align-items-center">
                  <i className="fas fa-image" />{t('image')}
                </label>
              </div>
              <div className="tool p-0">
              <label htmlFor="submit" className="px-2 m-0 h-100 d-flex align-items-center">
                <i className="fas fa-paper-plane" />{t('send')}
              </label>
              <input type="submit" id="submit" className='d-none'></input>
              </div>
            </div>
          </form>
        </div>
      );
    }
    else {
      return null
    }
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth.auth
})
export default connect(mapStateToProps)(withTranslation()(NewPost));

