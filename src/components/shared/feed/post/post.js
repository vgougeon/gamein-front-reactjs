import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './post.scss';
import Comments from '../comments/comments';
import { withTranslation } from 'react-i18next';
import Interweave from 'interweave';
import marked from 'marked'
import { getAvatarUrl } from '../../../../services/profile/avatarService';

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
  expand = (e) => {
    if(e.currentTarget.classList.contains('open')) {
      e.currentTarget.style.maxHeight = '250px';
      e.currentTarget.classList.remove('open')
    }
    else {
      let height = e.currentTarget.scrollHeight
      if(height > 1500) { height = 1500 }
      e.currentTarget.style.maxHeight = '' + height + 'px'
      e.currentTarget.classList.add('open')
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
            <div className="d-flex flex-column mt-g mb-g justify-content-center">
                <Link to={"user/" + this.props.username } className="username font-weight-bold">{ this.props.display_name }<i className="fas fa-check-circle"></i></Link>
                <span className="grade text-muted">{t(this.props.name)}</span>
            </div>
        </div>
        <div className="content px-g">
          <Interweave content={ marked(this.props.content) } />
        </div>
        <div className="content-images" onClick={ this.expand }>
          {
            this.props.path &&
            <React.Fragment>
              <div className="fas fa-angle-double-down expand"></div>
              <img alt="Post media" src={'/f/posts/' + this.props.path }/>
            </React.Fragment>
          }
        </div>
        <div className="content-footer px-g">
            <p className="text-muted text-size-s my-0">{ this.props.dateformat }</p>
            <div className="d-flex feed-tools align-items-center">
                <i className={ 'fa-heart pl-3 pr-2 ' + (this.state.liked ? 'fas liked' : 'far')}
                onClick={ this.likePost } />
                <span className="font-weight-bold">{ this.state.likes }</span>
                <i className="far fa-comment pl-3 pr-2" onClick={this.showComments} />
                <span className="font-weight-bold">{ this.state.comments }</span>
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
