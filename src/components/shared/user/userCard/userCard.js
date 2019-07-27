import { UserContext } from "../../../../services/auth/userProvider";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./userCard.scss";

class UserCard extends Component {
  static contextType = UserContext;
  render() {
    return (
      <div className="box s-1 account">
        <img className="banner" 
        src={ 'http://njak.fr/assets/imgs/skins/' +  this.context.auth.skin  + '.png'}
        alt="User Banner"
        />
        <div className="info pb-2">
          <img className="avatar" 
          src={ 'http://njak.fr/assets/imgs/accounts/' +  this.context.auth.avatar}
          alt="User Profile"
          />
          <div className="d-flex flex-column mt-2">
            <Link to={ 'user/' + this.context.auth.username }>
              <span className="username ml-2 font-weight-bold">
              { this.context.auth.username }
              </span>
            </Link>
            <span className="grade ml-2">
              { this.context.auth.gradeName }
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-between my-1">
          <div className="stat pb-1 pt-2">
            <span className="font-weight-bold text-size-l">
              { this.context.auth.level }
            </span>
            <span className="text-size-xs">NIVEAU</span>
          </div>
          <div className="stat pb-1 pt-2">
            <span className="font-weight-bold text-size-l">
              { this.context.auth.posts }
            </span>
            <span className="text-size-xs">POSTS</span>
          </div>
          <div className="stat pb-1 pt-2">
            <span className="font-weight-bold text-size-l">
              { this.context.auth.followers }
            </span>
            <span className="text-size-xs">ABONNÉS</span>
          </div>
        </div>
        <div className="experience-bar" style={{width: '' + (this.context.auth.experience * 10) % 100  + '%' }}>
          <span></span>
        </div>
      </div>
    );
  }
}

export default UserCard;
