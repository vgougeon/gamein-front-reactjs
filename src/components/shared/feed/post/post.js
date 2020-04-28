import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './post.scss';
import Comments from '../comments/comments';
import { withTranslation } from 'react-i18next';
import Interweave from 'interweave';
import marked from 'marked'
import { getAvatarUrl } from '../../../../services/profile/avatarService';
import Img from '../../img/img';

marked.setOptions({ breaks: true });
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      likes: this.props.likes,
      liked: this.props.account_id,
      comments: this.props.comments,
      active: false
    }
  }

  showComments = () => {
    this.setState({active : !this.state.active });
  }

  likePost = () => {
    let data = { id: this.props.id}
    axios.post('/api/likePost', data)
    .then(res => {
      if(res.data === 1){ 
        this.setState(state => ({
          likes: state.likes + 1,
          liked: true
        }))
      }
      else if(res.data === -1){
        this.setState(state => ({
          likes: state.likes - 1,
          liked: false
        }))
      }
      
    })
  }

  render() { 
    const { t } = this.props;
    return (  
    <div className="feed-content mb-g s-1">
    <div className="box feed">
        <div className="info">
            <img className="m-g" src={getAvatarUrl(this.props.avatar, this.props.username)}
            alt="Post user profile" />
            <div className="d-flex flex-column mt-g mb-g justify-content-center low-line-height">
                <Link to={"user/" + this.props.username } className="nostyle username font-weight-bold">{ this.props.display_name }</Link>
                <span className="grade text-muted">{t(this.props.name)}</span>
            </div>
        </div>
        <div className="content px-g">
          <Interweave content={ marked(this.props.content) } />
        </div>
        {
        this.props.path &&
        <div className="content-images">
          <Img 
            src={'/f/posts/' + this.props.path }
            alt="Post media"
          />
        </div>
        }
        <div className="content-footer px-g">
            <p className="text-muted text-size-s my-0">{ this.props.dateformat }</p>
            <div className="d-flex feed-tools align-items-center">
                <div className="tool-element">
                  <i className="far fa-eye pr-2"/>
                  <span>{ this.state.likes }</span> 
                </div>
                <div className="tool-element">
                  <i className={ 'fas fa-heart pr-2 ' + (this.state.liked ? 'liked' : '')}
                  onClick={ this.likePost } />
                  <span>{ this.state.likes }</span>
                </div>
                <div className="tool-element">
                  <i className="fas fa-comments pr-2" onClick={this.showComments} />
                  <span>{ this.state.comments }</span>
                </div>
            </div>
        </div>
    </div>
    { this.state.active &&
    < Comments idpost={this.props.id} />
    }
    </div>
    );
  }
}
 
export default withTranslation()(Post);
