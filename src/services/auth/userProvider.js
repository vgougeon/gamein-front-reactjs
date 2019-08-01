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
            signOut: this.signOut
        }
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
    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;