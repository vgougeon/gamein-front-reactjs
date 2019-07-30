import React, { Component } from 'react';
import UserHeader from '../../shared/user/userHeader/userHeader';
import axios from 'axios';

class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: this.props.match.params.username,
            userInfo: {}
        }
    }
    componentDidMount() {
        axios.get("http://api.njak.fr/me").then(res => {
            this.setState(state => ({
                userInfo: res.data
            }))
        })
    }
    render() { 
        return ( 
            <section id="page-content">
                <UserHeader {...this.state.userInfo } />
            </section>
        );
    }
}
 
export default UserPage;