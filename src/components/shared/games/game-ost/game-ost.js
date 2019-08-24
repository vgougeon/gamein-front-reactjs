import React, { Component } from 'react';
import axios from 'axios';
import './game-ost.scss';
class GameOst extends Component {
    constructor(props) {
        super(props);
        this.state = { osts : [] }
        this.getOsts()
    }
    getOsts = () => {
        axios.get('http://54.37.228.12/api/getGameOst', { params: { game: this.props.id} }).then(res => {
            this.setState(state => ({
                osts: res.data
            }));
        })
    }
    render() { 
        return (  
            <React.Fragment>
                <table className="osts">
                    <thead>
                        <tr className="head">
                            <th></th>
                            <th>Name</th>
                            <th>Game</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    { this.state.osts.map((ost) =>
                        <tr>
                            <td className="play">
                                <i className="fas fa-play"/>
                            </td>
                            <td>{ ost.name }</td>
                            <td>Minecraft</td>
                            <td className="like">
                                <i className="far fa-heart"/>
                            </td>
                        </tr>
                    )}                 
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
 
export default GameOst;