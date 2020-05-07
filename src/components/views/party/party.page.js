import React, { Component } from 'react';
import { connect } from 'react-redux'
import socket from '../../../services/socket/openSocket';
import { Route } from "react-router-dom";
import './party.page.scss'
import Spinner from '../../shared/spinner/spinner-standard';
import Skribol from '../../../mini-games/skribol/skribol';
import MiniAvatar from '../../shared/utils/miniAvatar/miniAvatar';
import { AnimatePresence, motion } from 'framer-motion';


class PartyPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            servers: [],
            game: null
        }
        
    }
    componentDidMount() {
        this.getServers()
        socket.emit('joinPartyPage')
    }
    componentWillUnmount() {
        socket.emit('leavePartyPage')
    }
    getServers() {
        socket.emit('getServers');
        socket.on('getServers', (data) => {
            this.setState({ servers: data })
            socket.off('getServers')
        })
        socket.on('updateServers', (data) => {
            this.setState({ servers: data })
        })
    }
    joinServer(id) {
        socket.emit("joinServer", id)
        socket.on('joinServer', (data) => {
            console.log(data)
            this.props.history.push("/party/" + id)
            socket.off('joinServer')
        })
    }
    leaveServer() {
        console.log("LEAVE")
        socket.emit('leaveServer')
    }
    render() {
        const servers = 
            <div className="page-container mt-g">
                <div className="main-width">
                    <h2 className="mt-3 mb-3">Rejoindre une partie !</h2>
                    { this.state.servers.map(item =>
                        <div key={ item.id } className="party-server-card" style={{ 
                            backgroundImage: `linear-gradient(rgba(var(--main-rgb), 0.6), rgba(var(--themergb), 0.3)), url('/assets/mini-games/${item.game.toLowerCase()}/bg.png')`
                            }}>
                            <div className="d-flex flex-column low-line-height">
                                <span className="party-game-name">{ item.game }</span>
                                <small className="muted-1">Créé par Njak</small>
                            </div>
                            <div className="ml-auto d-flex">
                                <AnimatePresence>
                                { item.players.map( player =>
                                    <motion.div
                                        key={ player.id }
                                        initial={{ width: 0, opacity: 0}}
                                        animate={{ width: "auto", opacity: 1}}
                                        exit={{ width: 0, opacity: 0}}
                                    >
                                        <MiniAvatar size="35px" {...player} host={ item.owner === player.sid } />
                                    </motion.div>
                                )}
                                </AnimatePresence>
                            </div>
                            <div className="ml-2 party-game-players">
                                <span>{ item.players.length } / <span> { item.maxPlayers } </span></span>
                            </div>
                            <AnimatePresence>
                            { item.players.find(i => i.id === this.props.auth.id) &&
                            <motion.div initial={{ width: 0, opacity: 0}} animate={{ width: "auto", opacity: 1}} exit={{ width: 0, opacity: 0}}>
                                <button className="ml-3 grey" onClick={ this.leaveServer }>Sortir</button>
                            </motion.div>
                            }
                            </AnimatePresence>
                            <AnimatePresence>
                            { item.players.find(i => (i.id === this.props.auth.id) && (i.sid === this.props.socket.status)) && (item.players.find(i => i.id === this.props.auth.id).sid === item.owner) &&
                            <motion.div initial={{ width: 0, opacity: 0}} animate={{ width: "auto", opacity: 1}} exit={{ width: 0, opacity: 0}}>
                                <button className="ml-3 no-wrap">GO !</button>
                            </motion.div>
                            }
                            </AnimatePresence>
                            <AnimatePresence>
                            { !item.players.find(i => (i.id === this.props.auth.id)) &&
                            <motion.div initial={{ width: 0, opacity: 0}} animate={{ width: "auto", opacity: 1}} exit={{ width: 0, opacity: 0}}>
                                <button className="ml-3" onClick={ this.joinServer.bind(this, item.id)}>Jouer</button>
                            </motion.div>
                            }
                            </AnimatePresence>
                            {/* { this.props.socket.status } */}
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

const mapStateToProps = (state) => ({
    auth: state.auth.auth,
    socket: state.socket
})
export default connect(mapStateToProps)(PartyPage)