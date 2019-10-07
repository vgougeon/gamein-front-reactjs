import React from 'react';
import Avatar from '../avatar/avatar';
import './message.scss';

const Message = (props) => {
    return (  
        <div className="message-container">
            <div className="avatar-container">
                <Avatar img={ 'http://54.37.228.12/f/accounts/' + props.avatar }/>  
            </div>
            <div className="message-content">
                <span className="username">{props.username} - {props.id}</span>
                <span className="message">{props.message}</span>
            </div>
        </div>
    );
}
 
export default Message;