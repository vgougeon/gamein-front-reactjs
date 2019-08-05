import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { UserContext } from '../../../../services/auth/userProvider';

import './login-popup.scss';

class LoginPopup extends Component {
    static contextType = UserContext; 
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' }
    }
    componentDidMount() {
        this.username.focus();
        document.addEventListener('mousedown', this.handleClick, false);
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false)
    }
    handleClick = (e) => {
        if(!this.node.contains(e.target)) {
            this.context.layout.toggleLogin()
        }
    }
    checkUsername = () => {
        console.log(this.state.username)
    }
    login = (e) => {
        this.context.signIn(this.state.username, this.state.password)
        e.preventDefault()
    }
    render() { 
        return (  
            <div className="popup-wrapper">
                <div className="login-popup" ref={node => this.node = node}>
                    <div className="login-head">
                        <img src="http://njak.fr/assets/favicon.png"></img>
                        Gamein
                    </div>
                    <div className="info-wrapper">
                        <span className="mb-2 bold">Rejoignez la communauté !</span>
                        <div className="info-item">
                            <b>x</b> membres
                        </div>
                        <div className="info-item">
                            <b>y</b> notes
                        </div>
                        <div className="info-item">
                            <b>z</b> jeux
                        </div>
                    </div>
                    <div className="login-wrapper">
                        <form className="w-100 d-flex flex-column" onSubmit={this.login}>
                            <h5 className="mb-4">Connexion</h5>
                            <label htmlFor="username">Username</label>
                            <input 
                            type="text" name="username" id="username" placeholder="Username"
                            value={this.state.username} 
                            onChange={ (e) => {this.setState({username: e.target.value})}}
                            onBlur={ this.checkUsername }
                            ref={(input) => { this.username = input; }} 
                            ></input>
                            <label htmlFor="password" className="mt-2">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password"
                            value={this.state.password}
                            onChange={ (e) => {this.setState({password: e.target.value})}}
                            >

                            </input>
                            <button type="submit" className="stroked mt-3"> Connexion </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default LoginPopup;