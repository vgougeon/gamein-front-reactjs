import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './post.scss';
import Comments from '../comments/comments';
import { withTranslation } from 'react-i18next';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      likes: this.props.likes,
      comments: this.props.comments,
      active: false
    }
  }
  expand = (e) => {
    console.log()
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

  render() { 
    const { t } = this.props;
    return (  
    <div className="feed-content mb-g s-1">
    <div className="box feed">
        <div className="info">
            <img className="m-g" src={"http://njak.fr/assets/imgs/accounts/" + this.props.avatar }
            alt="Post user profile" />
            <div className="d-flex flex-column mt-g mb-g justify-content-center">
                <Link to={"user/" + this.props.username } className="username font-weight-bold">{ this.props.display_name }<i className="fas fa-check-circle"></i></Link>
                <span className="grade text-muted">{t(this.props.name)}</span>
            </div>
        </div>
        <div className="content px-g">
            <p>{ this.props.content }</p>
        </div>
        <div className="content-images" onClick={ this.expand }>
          {
            this.props.path &&
            <React.Fragment>
              <div className="fas fa-angle-double-down expand"></div>
              <img alt="Post media" src={'http://54.37.228.12/f/posts/' + this.props.path }/>
            </React.Fragment>
          }
        </div>
        <div className="content-footer px-g">
            <p className="text-muted text-size-s my-0">{ this.props.dateformat }</p>
            <div className="d-flex feed-tools align-items-center">
                <i className="far fa-heart pl-3 pr-2"></i><span className="font-weight-bold">{ this.state.likes }</span>
                <i className="far fa-comment pl-3 pr-2" onClick={this.showComments}></i><span className="font-weight-bold">{ this.state.comments }</span>
            </div>
        </div>
    </div>
    < Comments active={this.state.active} idpost={this.props.id} />
    </div>
    );
  }
}
 
export default withTranslation()(Post);
