import React, { Component } from 'react';
import authActions from '../../../../store/authActions';
import LoginForm from './login-form';
import Img from '../../utils/img/img';

import './login-popup.scss';
import RegisterForm from './register-form';

class LoginPopup extends Component {
    constructor(props) {
        super(props);
        this.state = { form: 'login' }
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false)
    }
    handleClick = (e) => {
        if(!this.node.contains(e.target)) {
            this.props.toggle()
        }
    }
    checkUsername = () => {
        console.log("Check username")
    }
    login = (e) => {
        authActions.signIn(this.state.username, this.state.password)
        e.preventDefault()
    }
    switchForm = () => {
        this.setState(prevState => {
            return { form: (prevState.form === "login") ? "register" : "login" };
        });
    }
    render() { 
        return (  
            <div className="popup-wrapper">
                <div className="login-popup" ref={node => this.node = node}>
                    <div className="login-head z1">
                        <Img src="/assets/favicon.png" alt="Favicon"/>
                    </div>
                    <div className="login-wrapper relative">
                        <div className="bg-login">  
                        </div>
                    </div>
                    <div className="info-wrapper">
                    { this.state.form === 'login' ?
                    <LoginForm switchForm={ this.switchForm }/> : 
                    <RegisterForm switchForm={ this.switchForm }/> }
                    </div>
                </div>
            </div>
        );
    }
}
 
export default LoginPopup;