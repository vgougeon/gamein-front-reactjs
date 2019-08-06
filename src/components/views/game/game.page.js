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
            },
            editor: true,

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
            </section>
        );
    }
}
 
export default GamePage;