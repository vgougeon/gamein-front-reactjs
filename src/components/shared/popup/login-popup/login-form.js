import React, { Component } from 'react';
import authActions from '../../../../store/authActions';
import Img from '../../img/img';

import './login-popup.scss';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' }
    }
    componentDidMount() {
        this.username.focus();
    }
    checkUsername = () => {
        console.log("Check username")
    }
    login = (e) => {
        authActions.signIn(this.state.username, this.state.password)
        e.preventDefault()
    }
    render() { 
        return (  
            <form className="w-100 d-flex flex-column z1" onSubmit={this.login}>
                <div className="mb-3 d-flex justify-content-between align-items-center">
                    <h5>Connexion</h5>
                </div>
                
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
                <div className="d-flex justify-content-between mt-3">
                    <button className="grey" onClick={ this.props.switchForm }><i className="fas fa-user-circle"/> Inscription </button>
                    <button type="submit"> Connexion </button>
                </div>
                
            </form>
        );
    }
}
 
export default LoginForm;