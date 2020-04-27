import React from 'react';
import Avatar from '../avatar/avatar';
import './message.scss';
import { getAvatarUrl } from '../../../../services/profile/avatarService';

const Message = (props) => {
    alert("ok")
    return (  
        <div className="message-container">
            <div className="avatar-container">
                <Avatar img={getAvatarUrl(props.avatar, props.username)}/>  
            </div>
            <div className="message-content">
                <span className="username">{props.username} - {props.id}</span>
                <span className="message">{props.message}</span>
            </div>
        </div>
    );
}
 
export default Message;