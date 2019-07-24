import React, { Component } from 'react';
import { UserContext } from '../../../../services/auth/userProvider';
import AuthButtons from './auth-buttons';
import Spinner from '../../../shared/spinner/spinner-standard';
function Login () {
    return (
        <button className="stroked-theme">
            <i className="fas fa-user-circle mr-1" />
        </button>
    ) 
}

class AuthManager extends Component {
    static contextType = UserContext;
    render() {
        let auth;
        if(this.context.isLoading){ auth = <Spinner size={"30px"}/> }
        else if(this.context.isLoggedIn){ auth = <AuthButtons {...this.context.auth} /> } 
        else { auth = <Login />; }
        return (
            <div id="buttons">
                { auth }
            </div>
        );
    }
}

export default AuthManager;