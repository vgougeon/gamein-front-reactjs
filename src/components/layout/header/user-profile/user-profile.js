import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './user-profile.scss';
import * as theme from '../../../../services/themes/themeService'; 

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="user-profile">
      <div className="head">
        <div className="closeUserProfile" onClick={ this.props.toggle }>
          <i className="fas fa-angle-double-right"></i>
        </div>
        <img src={ 'http://njak.fr/assets/imgs/accounts/' + this.props.avatar} alt="User Profile" />
        <div className=" m-g d-flex flex-column">
          <Link to={ "/user/" + this.props.username } className="bold">{ this.props.display_name }</Link>
          <span className='username'>@{ this.props.username }</span>
        </div>
      </div>
      <div className="d-flex flex-column mt-1">
        <div className="wide-button">
          <i className="fas fa-user-circle mr-3" /><span>Mon compte</span>
        </div>
        <div className="wide-button">
          <div className="d-flex justify-content-between w-100">
            <div>
              <i className="fas fa-palette mr-3" /><span>Thèmes</span>
            </div>
            <div className="d-flex">
              <div className="theme-picker white" onClick={() => theme.switchTheme(1)}></div>
              <div className="theme-picker black" onClick={() => theme.switchTheme(2)}></div>
              <div className="theme-picker rain" onClick={() => theme.switchTheme(3)}></div>
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
