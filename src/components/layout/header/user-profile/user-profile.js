import React from 'react';
import { Link } from 'react-router-dom';
import './user-profile.scss';
const UserProfile = (props) => {
  return ( 
    <div className="user-profile">
      <div className="head">
        <img src={ 'http://njak.fr/assets/imgs/accounts/' + props.avatar} alt="User Profile" />
        <div className=" m-g d-flex flex-column">
          <Link to={ "/user/" + props.username } className="bold">{ props.display_name }</Link>
          <span className='username'>@{ props.username }</span>
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
              <div className="theme-picker white"></div>
              <div className="theme-picker black"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default UserProfile;
