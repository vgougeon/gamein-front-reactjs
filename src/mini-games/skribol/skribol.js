import React, { Component } from 'react';
import './skribol.scss'
import Canvas from './canvas';

class Skribol extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <>
            <div className="skribol-top">
                H__ry __t__r
            </div>
            <div className="page-container">
                <div className="main-width">
                    <Canvas />
                </div>
            </div>
            </>
        );
    }
}
 
export default Skribol;