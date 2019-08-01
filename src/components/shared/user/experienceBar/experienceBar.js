import React, { Component } from 'react';
import './experienceBar.scss';

class experienceBar extends Component {
    state = {  }
    render() { 
        return (  
            <div className="experience-bar" style={{width: (this.props.experience * 10) % 100 + '%'}}>
                <div className="progress text-size-s">
                    <span className="bold mr-1">XP </span> { this.props.experience % 10 } / 10
                </div>
            </div>
        );
    }
}
 
export default experienceBar;