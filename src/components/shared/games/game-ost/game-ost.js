import React, { Component } from 'react';
import './game-ost.scss';
class GameOst extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <React.Fragment>
                <table className="osts">
                    <tr className="head">
                        <th></th>
                        <th>Name</th>
                        <th>Game</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td className="play">
                            <i className="fas fa-play"/>
                        </td>
                        <td>Sweden</td>
                        <td>Minecraft</td>
                        <td className="like">
                            <i className="far fa-heart"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="play">
                            <i className="fas fa-play"/>
                        </td>
                        <td>C418</td>
                        <td>Minecraft</td>
                        <td className="like">
                            <i className="far fa-heart"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="play">
                            <i className="fas fa-play"/>
                        </td>
                        <td>Haunted</td>
                        <td>Minecraft</td>
                        <td className="like">
                            <i className="far fa-heart"/>
                        </td>
                    </tr>
                </table>
            </React.Fragment>
        );
    }
}
 
export default GameOst;