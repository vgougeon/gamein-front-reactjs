import React, { Component } from 'react';
import GameHeader from '../../shared/games/gameHeader/gameHeader';
import axios from 'axios';
import { Route } from "react-router-dom";
import Spinner from '../../shared/spinner/spinner-standard';
import GameOst from '../../shared/games/game-ost/game-ost';

class GamePage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: this.props.match.params.id,
            gameInfo: {
                console: []
            },
            editor: false,
            toggleEdit: this.toggleEdit
        }
    }
    componentDidMount() {
        axios.get('/api/getGame', { params: { game: this.state.id } }).then(res => {
            this.setState(state => ({
                gameInfo: res.data
            }));
        })
    }
    toggleEdit = () => {
        this.setState({
            editor: !this.state.editor
        })
    }
    render() { 
        return ( 
            <section id="page-content">
                <GameHeader {...this.state.gameInfo} editor={this.state.editor} toggleEdit={this.state.toggleEdit} />
                <div className="d-flex align-items-center justify-content-center">
                <Route exact path="/game/:id/" render={() => <div className="mt-5"><Spinner /></div>}></Route>
                <Route path="/game/:id/images" render={() => <div className="mt-5"><Spinner /></div>}></Route>
                <Route path="/game/:id/ost" render={(props) => <GameOst id={ this.state.id} />}></Route>
                </div>
            </section>
        );
    }
}
 
export default GamePage;