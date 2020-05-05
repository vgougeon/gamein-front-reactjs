import React, { Component } from 'react';
import authActions from '../../../../store/authActions';
import { withTranslation } from 'react-i18next';
import './login-popup.scss';
import Spinner from '../../spinner/spinner-standard';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', loading: false, error:'', warning:'' }
    }
    componentDidMount() {
        this.username.focus();
    }
    checkUsername = () => {
        console.log("Check username")
    }
    login = async (e) => {
        e.preventDefault()
        this.setState({ loading: true })
        let res = await authActions.signIn(this.state.username, this.state.password)
        if(res.status === 201){
            this.setState({ error: res.data })
        }
        this.setState({ loading: false })
    }
    render() {
        const { t } = this.props;
        return (  
            <form className="w-100 d-flex flex-column z1" onSubmit={this.login}>
                <div className="mb-3 d-flex justify-content-between align-items-center">
                    <h5>{ t("login") }</h5>
                </div>
                <p className="error">{ t(this.state.error) }</p>
                <p className="warning">{ t(this.state.warning) }</p>
                <label htmlFor="username">{ t("username") }</label>
                <input 
                type="text" name="username" id="username" placeholder={ t("username") }
                value={this.state.username} 
                onChange={ (e) => {this.setState({username: e.target.value})}}
                onBlur={ this.checkUsername }
                spellcCeck="false"
                ref={(input) => { this.username = input; }} 
                ></input>
                <label htmlFor="password" className="mt-2">{ t("password") }</label>
                <input type="password" name="password" id="password" placeholder={ t("password") }
                value={this.state.password}
                onChange={ (e) => {this.setState({password: e.target.value})}}
                >

                </input>
                <div className="d-flex justify-content-between mt-3 w-100">
                    { this.state.loading ? <Spinner size={ 25 } /> : 
                    <button type="submit">{ t("login") }</button> }
                    <button className="grey" onClick={ this.props.switchForm }><i className="fas fa-user-circle"/>{ t("register") }</button>
                </div>
                
            </form>
        );
    }
}
 
export default withTranslation()(LoginForm);