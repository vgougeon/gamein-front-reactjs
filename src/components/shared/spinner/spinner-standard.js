import React from 'react';
import './spinner.scss';
const Spinner = (props) => {
    return ( 
        <div className="loader" style={{width: props.size, height: props.size, borderWidth: props.size/7}}></div>
    );
}
 
export default Spinner;