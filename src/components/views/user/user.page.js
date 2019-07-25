import React, { Component } from 'react';
import UserHeader from '../../shared/user/userHeader';
import axios from 'axios';

class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: this.props.match.params.username,
            userInfo: {}
        }
        console.log(this.props)
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
                <div className="row g-g">
                    <div className="col-12">
                        <UserHeader {...this.state.userInfo } />
                    </div>
                </div>
            </section>
        );
    }
}
 
export default UserPage;