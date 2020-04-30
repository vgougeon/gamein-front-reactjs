import React from 'react';
import './spinner.scss';
const Spinner = (props) => {
    let size = props.size || 30
    return (
        <React.Fragment>
        <div className={ props.position ? ("spinner-" + props.position) : ""  }>
            <div className="loader" style={{width: size, height: size, borderWidth: size/7}}></div>
        </div>
        </React.Fragment>
    );
}
 
export default Spinner;