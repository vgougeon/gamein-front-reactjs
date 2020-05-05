import React, { Component } from 'react';
import { connect } from 'react-redux';
import authActions from '../../../../store/authActions';
import LoginPopup from '../../../shared/popup/login-popup/login-popup'
import popup from '../../../../store/popupActions'
import AuthButtons from './auth-buttons';
import Spinner from '../../../shared/spinner/spinner-standard';

function Login (props) {
    return (
        <React.Fragment>
            <button className="stroked-theme mr-3" onClick={ props.click }>
                <i className="fas fa-globe-europe"/>Login
            </button>
        </React.Fragment>
        
    ) 
}

class AuthManager extends Component {
    render() {
        let auth;
        if(this.props.isLoading){ auth = <Spinner/> }
        else if(this.props.auth){ auth = <AuthButtons {...this.props.auth} /> } 
        // else { auth = <Login click={ authActions.toggleLogin } />; }
        else auth = <Login click={ this.login }></Login>
        return (
            <div id="buttons" className="item">
                { auth }
            </div>
        );
    }
    login() {
        popup.set(<LoginPopup></LoginPopup>)
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth.auth,
    isLoading: state.auth.isLoggedIn,
})
export default connect(mapStateToProps)(AuthManager)