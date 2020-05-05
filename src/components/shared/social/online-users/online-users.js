import React, { Component } from 'react';
import "./online-users.scss";
import Img from "../../utils/img/img"
import { getAvatarUrl } from '../../../../services/profile/avatarService';

class OnlineUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="online-users-container">
                <div className="online-users-user">
                    <Img src={ getAvatarUrl(null, "Njak")} />

                </div>
            </div>
        );
    }
}
 
export default OnlineUsers;