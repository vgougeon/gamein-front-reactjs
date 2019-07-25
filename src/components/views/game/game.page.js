import React, { Component } from 'react';
import GameHeader from '../../shared/games/gameHeader/gameHeader';
import axios from 'axios';

class GamePage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: this.props.match.params.id,
            gameInfo: {
                console: []
            }
        }
    }
    componentDidMount() {
        axios.get('http://api.njak.fr/getGame', { params: { game: this.state.id } }).then(res => {
            this.setState(state => ({
                gameInfo: res.data
            }));
        })
    }
    render() { 
        return ( 
            <section id="page-content">
                <div className="row g-g">
                    <div className="col-12">
                        <GameHeader {...this.state.gameInfo} />
                    </div>
                </div>
            </section>
        );
    }
}
 
export default GamePage;