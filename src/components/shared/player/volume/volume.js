import React, { Component } from 'react';
import './volume.scss';
class Volume extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="volume">
                <i className="fas fa-volume-off"/>
                <div className="volume-range">
                    <input type="range" className="volume-input-range" onChange={ this.changeVolume }></input>
                </div>
            </div>
        );
    }
    changeVolume = () => {
        console.log("Gérer un event")
    }
}
 
export default Volume;