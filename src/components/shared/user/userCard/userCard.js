import { UserContext } from "../../../../services/auth/userProvider";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./userCard.scss";
class UserCard extends Component {
  static contextType = UserContext;
  render() {
    return (
      <div class="box s-1 account">
        <img class="banner" 
        src={ 'http://njak.fr/assets/imgs/skins/' +  this.context.auth.skin  + '.png'}
        />
        <div class="info pb-2">
          <img class="avatar" 
          src={ 'http://njak.fr/assets/imgs/accounts/' +  this.context.auth.avatar}
           />
          <div class="d-flex flex-column mt-2">
            <Link to={ 'user/' + this.context.auth.username }>
              <span class="username ml-2 font-weight-bold">
              { this.context.auth.username }
              </span>
            </Link>
            <span class="grade ml-2">
              { this.context.auth.gradeName }
            </span>
          </div>
        </div>
        <div class="d-flex justify-content-between my-1">
          <div class="stat pb-1 pt-2">
            <span class="font-weight-bold text-size-l">
              { this.context.auth.experience }
            </span>
            <span class="text-size-s">Niveau</span>
          </div>
          <div class="stat pb-1 pt-2">
            <span class="font-weight-bold text-size-l">
              { this.context.auth.posts }
            </span>
            <span class="text-size-s">Posts</span>
          </div>
          <div class="stat pb-1 pt-2">
            <span class="font-weight-bold text-size-l">
              { this.context.auth.friends }
            </span>
            <span class="text-size-s">Amis</span>
          </div>
        </div>
        {/* <div class="experience-bar" style="width: <?= $acc->getExpPercent(); ?>%">
        <span></span>
    </div> */}
      </div>
    );
  }
}

export default UserCard;
