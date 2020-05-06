import React, { Component } from 'react';
import socket from '../../../services/socket/openSocket';
import { Route } from "react-router-dom";
import './party.page.scss'
import Spinner from '../../shared/spinner/spinner-standard';
import Skribol from '../../../mini-games/skribol/skribol';


class PartyPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            servers: [],
            game: null
        }
        this.getServers()
    }
    getServers() {
        socket.emit('getServers');
        socket.on('getServers', (data) => {
            console.log(data)
            this.setState({ servers: data })
        })
    }
    joinServer(id) {
        socket.emit("joinServer", id)
        socket.on('joinServer', (data) => {
            console.log(data)
            this.props.history.push("/party/" + id)
        })
    }
    render() {
        const servers = 
                <div className="page-container mt-g">
                    <div className="main-width">
                        <h2 className="mt-3 mb-3">Rejoindre une partie !</h2>
                        { this.state.servers.map(item =>
                            <div key={ item.id } className="party-server-card" style={{ 
                                backgroundImage: `linear-gradient(rgba(var(--main-rgb), 0.6), rgba(var(--themergb), 0.3)), url('/assets/mini-games/${item.game}/bg.png')`
                                }}>
                                <div className="d-flex flex-column low-line-height">
                                    <span className="party-game-name">{ item.game }</span>
                                    <small className="muted-1">Créé par Njak</small>
                                </div>
                                <div className="ml-auto party-game-players">
                                    <span>{ item.players.length } / <span> { item.maxPlayers } </span></span>
                                </div>
                                <button className="ml-3" onClick={ this.joinServer.bind(this, item.id)}>Rejoindre</button>
                            </div>
                        )}
                    </div>
                </div>
        return ( 
            <section id="page-content">
                { this.state.game ? <Skribol /> : servers }
            </section>
        );
    }
}

 
export default PartyPage;