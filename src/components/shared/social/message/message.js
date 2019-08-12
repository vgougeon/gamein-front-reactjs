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
                <span className="username">Elec</span>
                <span className="message">Coucou les copains, je ne me présente plus, je suis le maître PUBG</span>
            </div>
        </div>
    );
}
 
export default Message;