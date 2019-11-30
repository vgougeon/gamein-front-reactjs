import React, { Component } from 'react';
import './volume.scss';
class Volume extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (  
            <div className="volume">
                <i className="fas fa-volume-off"/>
                <div className="volume-container">
                    <div className="volume-range" style={{ width: '' + this.props.volume + '%'}}></div>
                    <input type="range" className="volume-input-range" onChange={ this.props.setVolume }></input>
                </div>
            </div>
        );
    }
}
 
export default Volume;