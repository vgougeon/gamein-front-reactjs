import React, { Component } from 'react';
import authActions from '../../../../store/authActions';
import LoginForm from './login-form';
import Img from '../../utils/img/img';

import './login-popup.scss';
import RegisterForm from './register-form';
import Logo from '../../../layout/header/logo/logo';
import { AnimatePresence } from 'framer-motion';

class LoginPopup extends Component {
    constructor(props) {
        super(props);
        this.state = { form: 'login' }
    }
    checkUsername = () => {
        console.log("Check username")
    }
    switchForm = () => {
        this.setState(prevState => {
            return { form: (prevState.form === "login") ? "register" : "login" };
        });
    }
    render() { 
        return (  
            <div className="login-popup">
                <div className="login-head z-i1">
                    {/* <Img src="/assets/favicon.png" alt="Favicon"/> */}
                </div>
                <div className="login-wrapper position-relative">
                    <div className="bg-login">  
                    </div>
                    <div className="login-popup-logo">
                        <AnimatePresence>
                            <Logo />
                        </AnimatePresence>
                    </div>
                </div>
                <div className="info-wrapper">
                { this.state.form === 'login' ?
                <LoginForm switchForm={ this.switchForm }/> : 
                <RegisterForm switchForm={ this.switchForm }/> }
                </div>
            </div>
        );
    }
}
 
export default LoginPopup;