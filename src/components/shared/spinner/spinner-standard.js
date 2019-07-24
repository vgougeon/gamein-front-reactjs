import React, { Component } from 'react';
import './spinner.scss';
const Spinner = (props) => {
    return ( 
        <div className="loader" style={{width: props.size, height: props.size, borderWidth: props.size/10}}></div>
    );
}
 
export default Spinner;