import React, { Component } from 'react';
import Avatar from '../avatar/avatar';
import './message.scss';

const Message = (props) => {
    return (  
        <div className="message-container">
            <div className="avatar-container">
                <Avatar img={ 'http://njak.fr/assets/imgs/accounts/' + props.avatar }/>  
            </div>
            <div className="message-content">
                <span className="username">{props.username} - {props.id}</span>
                <span className="message">{props.message}</span>
            </div>
        </div>
    );
}
 
export default Message;