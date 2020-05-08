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
            <div className="page-container mt-3">
                <div className="main-width">
                    <h1>Skribol</h1>
                    <Canvas />
                </div>
            </div>
            
        );
    }
}
 
export default Skribol;