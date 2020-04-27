import React, { Component } from 'react';
import authActions from '../../../../store/authActions';
import Img from '../../img/img';

import './login-popup.scss';
import Spinner from '../../spinner/spinner-standard';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '', 
            password: '', 
            confirmPassword: '',
            error: '',
            warning: '',
            loading: false
        }
    }
    componentDidMount() {
        this.username.focus();
    }
    checkUsername = () => {
        console.log("Check username")
    }
    register = async (e) => {
        e.preventDefault()
        this.setState({ warning: "", error: "", loading: true})
        if(this.state.password !== this.state.confirmPassword) {
            this.setState({ warning: "Les mots de passes sont différents", loading: false})
            return true
        }
        let res = await authActions.register(this.state.username, this.state.password)
        console.log(res)
        if(res.status === 201){
            this.setState({ error: res.data })
        }
        this.setState({ loading: false })
    }
    render() { 
        return (  
            <form className="w-100 d-flex flex-column z1" onSubmit={this.register}>
                <div className="mb-3 d-flex justify-content-between align-items-center">
                    <h5>Inscription</h5>
                </div>
                <p className="error">{ this.state.error }</p>
                <p className="warning">{ this.state.warning }</p>
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
                ></input>
                <label htmlFor="confirmPassword" className="mt-2">Confirm password</label>
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm password"
                value={this.state.confirmPassword}
                onChange={ (e) => {this.setState({confirmPassword: e.target.value})}}
                ></input>
                <div className="d-flex justify-content-between mt-3">
                    { this.state.loading ? <Spinner size={ 25 } /> : 
                    <button type="submit">Inscription</button> }
                    <button className="grey" onClick={this.props.switchForm}>Déjà inscrit ? </button>
                </div>
                
            </form>
        );
    }
}
 
export default RegisterForm;