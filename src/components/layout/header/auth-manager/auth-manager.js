import React, { Component } from 'react';
import { UserContext } from '../../../../services/auth/userProvider';
import AuthButtons from './auth-buttons';
import Spinner from '../../../shared/spinner/spinner-standard';
function Login (props) {
    return (
        <button className="stroked-theme" onClick={ props.click }>
            <i className="fas fa-user-circle mr-2" />Connexion
        </button>
    ) 
}

class AuthManager extends Component {
    static contextType = UserContext;
    render() {
        let auth;
        if(this.context.isLoading){ auth = <Spinner size={30}/> }
        else if(this.context.isLoggedIn){ auth = <AuthButtons {...this.context.auth} /> } 
        else { auth = <Login click={ this.context.layout.toggleLogin} />; }
        return (
            <div id="buttons">
                { auth }
            </div>
        );
    }
}

export default AuthManager;