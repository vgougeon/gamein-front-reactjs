import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './post.scss';
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      likes: this.props.likes,
      comments: this.props.comments
    }
  }
  render() { 
    return (  
    <div className="box s-1 feed mb-g">
        <div className="info">
            <img className="m-g" src={"http://njak.fr/assets/imgs/accounts/" + this.props.avatar }
            alt="Post user profile" />
            <div className="d-flex flex-column mt-g mb-g justify-content-center">
                <Link to={"user/" + this.props.username } className="username font-weight-bold">{ this.props.display_name }<i className="fas fa-check-circle"></i></Link>
                <span className="grade text-muted">{ this.props.name}</span>
            </div>
        </div>
        <div className="content px-g">
            <p>{ this.props.content }</p>
        </div>
        <div className="content-images">
          {
            this.props.images &&
            this.props.images.map(image => (
            <img alt="Post media" src={'http://api.njak.fr/assets/imgs/posts/' + image.path }/>
          ))}
        </div>
        <div className="content-footer px-g">
            <p className="text-muted text-size-s my-0">{ this.props.date }</p>
            <div className="d-flex feed-tools align-items-center">
                <i className="fas liked fa-heart pl-3 pr-2"></i><span className="font-weight-bold">{ this.state.likes }</span>
                <i className="far fa-comment pl-3 pr-2"></i><span className="font-weight-bold">{ this.state.comments }</span>
            </div>
        </div>
    </div>

    );
  }
}
 
export default Post;