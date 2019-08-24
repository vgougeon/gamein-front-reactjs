import React, { Component } from 'react';
import GameHeader from '../../shared/games/gameHeader/gameHeader';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
        axios.get('http://54.37.228.12/api/getGame', { params: { game: this.state.id } }).then(res => {
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
                <Route exact path="/game/:id/" component={ Spinner }></Route>
                <Route path="/game/:id/images" component={ Spinner }></Route>
                {/* <Route path="/game/:id/ost" component={ GameOst }></Route> */}
                <Route path="/game/:id/ost" render={(props) => <GameOst {...props} />}></Route>
                </div>
            </section>
        );
    }
}
 
export default GamePage;