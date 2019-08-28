import React, { Component } from 'react';
import Dropdown from '../../../shared/dropdown/dropdown';
import UserProfile from '../user-profile/user-profile';
import Avatar from '../../../shared/social/avatar/avatar';
import { connect } from 'react-redux';
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
                <div className="icon-button mr-3 d-none d-md-flex" onClick={ this.props.toggleChat }>
                    <i className="fas fa-comments"></i>
                </div>
                <div className="icon-button" onClick={ this.toggleUserProfile }>
                    <Avatar 
                    img={"http://njak.fr/assets/imgs/accounts/" + this.props.avatar }
                    status={ 1 }
                    />
                </div>
                <Dropdown top={0} toggle={ this.toggleUserProfile } show={ this.state.userProfile }>
                    <UserProfile {...this.props } toggle={ this.toggleUserProfile } />
                </Dropdown>
            </React.Fragment>
         );
    }
}
const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => ({
    toggleChat: () => dispatch({ type: 'SOCIAL_TOGGLE_CHAT'})
})
export default connect(mapStateToProps, mapDispatchToProps)(AuthButtons)