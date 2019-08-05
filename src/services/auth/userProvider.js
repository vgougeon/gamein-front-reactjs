import React, { createContext, Component } from "react";
import axios from 'axios';

export const UserContext = createContext({
    isLoggedIn: false
});

class UserProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            isLoggedIn: false,
            auth: {},

            signOut: this.signOut,
            signIn: this.signIn,
            layout: {
                login: false,
                toggleLogin: this.toggleLogin
            }
        }
        this.getMe()
    }
    getMe = () => {
        axios.get('http://54.37.228.12/api/me').then(res => {
            if(res.data.id !== undefined){
                this.setState(state => ({
                    isLoading: false,
                    isLoggedIn: true,
                    auth: res.data
                }))
            }
            else {
                this.setState(state => ({
                    isLoading: false
                }))
            }
        })
    }
    signOut = () => {
        this.setState({
            isLoading: false,
            isLoggedIn: false,
            auth: {}
        })
    }
    signIn = (username, password) => {
        axios.post('http://54.37.228.12/api/signIn', 
        { params: { 
            username: username,
            password: password
        }})
        .then(res => {
            if(res.data !== false){
                this.setState({
                    isLoading: true,
                })
                this.toggleLogin()
                localStorage.setItem("token", res.data);
                axios.defaults.headers.common['Authorization'] = res.data;
                this.getMe()
            }
            else {
                alert("error!")
            }
        })
    }
    toggleLogin = () => {
        this.setState(state => ({
            layout: {
              ...state.layout,
              login: !state.layout.login
            }
        }))
    }
    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;