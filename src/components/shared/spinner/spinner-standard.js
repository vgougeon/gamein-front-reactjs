import React from 'react';
import './spinner.scss';
const Spinner = (props) => {
    let size = props.size || 30
    return ( 
        <div className="loader" style={{width: size, height: size, borderWidth: size/7}}></div>
    );
}
 
export default Spinner;