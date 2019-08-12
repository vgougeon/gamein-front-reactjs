import React, { Component } from 'react';
import './avatar.scss';

const Avatar = (props) => {
    let status = null
    if(props.status !== undefined){
        let style = 'rgb(36, 36, 36)'
        if(props.status === 1) //Online
            style = 'rgb(103, 192, 108)'
        if(props.status === 2) //Away
            style = 'rgb(235, 173, 40)'
        status = <div className="status" style={{ background: style}} />
    }
    return (
        <div className="avatar-component">
            <img src={ props.img } />
            { status }
        </div>
    );
}
 
export default Avatar;