import React, { Component } from 'react';
import Dropdown from '../../../shared/dropdown/dropdown';
import UserProfile from '../user-profile/user-profile';

class AuthButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {  userProfile: false, notifications: false };
        this.toggleUserProfile = this.toggleUserProfile.bind(this)
    }
    toggleUserProfile(){
        this.setState(state => ({
            userProfile: !this.state.userProfile
        }));
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="icon-button mr-3 d-none d-md-flex">
                    <i className="fas fa-bell"></i>
                </div>
                <div className="icon-button" onClick={ this.toggleUserProfile }>
                    <img alt="User profile" src={"http://njak.fr/assets/imgs/accounts/" + this.props.avatar } />
                </div>
                <Dropdown top={0} show={ this.state.userProfile }>
                    <UserProfile {...this.props} />
                </Dropdown>
            </React.Fragment>
         );
    }
}
export default AuthButtons;