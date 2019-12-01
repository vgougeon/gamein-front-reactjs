import React, { Component } from 'react';
import { connect } from 'react-redux';
import authActions from '../../../../store/authActions';
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
    render() {
        let auth;
        if(this.props.isLoading){ auth = <Spinner size={30}/> }
        else if(this.props.auth){ auth = <AuthButtons {...this.props.auth} /> } 
        else { auth = <Login click={ authActions.toggleLogin } />; }
        return (
            <div id="buttons">
                { auth }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth.auth,
    isLoading: state.auth.isLoggedIn,
})
export default connect(mapStateToProps)(AuthManager)