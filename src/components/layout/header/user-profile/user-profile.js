import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './user-profile.scss';
import * as theme from '../../../../services/themes/themeService'; 
import ExperienceBar from '../../../shared/user/experienceBar/experienceBar';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="user-profile">
      <div className="head">
        <img src={ 'http://njak.fr/assets/imgs/skins/' + this.props.skin + '.png'} className="user-banner" />
        <div className="profile-head-content">
          <div className="closeUserProfile" onClick={ this.props.toggle }>
            <i className="fas fa-angle-double-right"></i>
          </div>
          <img src={ 'http://njak.fr/assets/imgs/accounts/' + this.props.avatar} className="user-avatar" alt="User Profile" />
          <div className=" m-g d-flex flex-column">
            <Link to={ "/user/" + this.props.username } className="bold">{ this.props.display_name }</Link>
            <span className='username'>@{ this.props.username }</span>
          </div>
        </div>
      </div>
      <ExperienceBar experience={ this.props.experience } />
      <div className="d-flex justify-content-between my-1">
        <div className="stat pb-1 pt-2">
          <span className="font-weight-bold text-size-l">{ this.props.level }</span>
          <span className="text-size-xs">LVL</span>
        </div>
        <div className="stat pb-1 pt-2">
          <span className="font-weight-bold text-size-l">{ this.props.points }</span>
          <span className="text-size-xs">PTS</span>
        </div>
        <div className="stat pb-1 pt-2">
          <span className="font-weight-bold text-size-l">{ this.props.followers }</span>
          <span className="text-size-xs">SUB</span>
        </div>
      </div>
      <div className="d-flex flex-column mt-1">
        <div className="wide-button">
          <i className="fas fa-user-circle mr-3" /><span>Mon compte</span>
        </div>
        <div className="wide-button">
          <div className="d-flex justify-content-between w-100">
            <div>
              <i className="fas fa-globe mr-3" /><span>Langage</span>
            </div>
            <div className="d-flex align-items-center">
              <span>Français</span><i className="open-menu fas fa-chevron-down ml-2" />
            </div>
          </div>
        </div>
        <div className="wide-button">
          <div className="d-flex justify-content-between w-100">
            <div>
              <i className="fas fa-palette mr-3" /><span>Thèmes</span>
            </div>
            <div className="d-flex">
              <div className="theme-picker white" onClick={() => theme.switchTheme(1)}></div>
              <div className="theme-picker black" onClick={() => theme.switchTheme(2)}></div>
              <div className="theme-picker bluetooth" onClick={() => theme.switchTheme(5)}></div>
              <div className="theme-picker predator" onClick={() => theme.switchTheme(4)}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
 
export default UserProfile;
