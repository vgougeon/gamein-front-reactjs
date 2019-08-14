import React, { Component } from 'react';
import Avatar from '../avatar/avatar';
import './message.scss';

const Message = (props) => {
    return (  
        <div className="message-container">
            <div className="avatar-container">
                <Avatar img={ props.img }/>  
            </div>
            <div className="message-content">
                <span className="username">{props.username}</span>
                <span className="message">{props.message}</span>
            </div>
        </div>
    );
}
 
export default Message;