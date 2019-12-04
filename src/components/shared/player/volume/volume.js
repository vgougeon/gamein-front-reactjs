import React, { Component } from 'react';
import './volume.scss';
class Volume extends Component {
    render() { 
        return (  
            <div className="volume">
                <i className={ "fas " + (this.props.volume > 0 ? "fa-volume-off" : "fa-volume-mute")} 
                onClick={ () => { this.props.setVolume(0) }}/>
                <div className="volume-container">
                    <div className="volume-range" style={{ width: '' + this.props.volume + '%'}}></div>
                    <input type="range" className="volume-input-range" onChange={ this.props.setVolume }></input>
                    <span className="volume-indicator">
                    { this.props.volume + '%'}
                    </span>
                </div>
                
            </div>
        );
    }
}
 
export default Volume;