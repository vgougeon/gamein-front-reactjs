import React, { Component } from 'react';
import socket from '../../services/socket/openSocket'
import './skribol.scss'
import Canvas from './canvas';

class Skribol extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            currentPlayerWord: "",
            words: []
        }
        this.events()
    }
    componentDidMount() {
        console.log("ready")
        socket.emit('skribol-ready')
    }
    events() {
        socket.on('skribol-chooseWord', this.chooseWord.bind(this))
        socket.on('skribol-word', this.word.bind(this))
        socket.on('skribol-hint', this.hint.bind(this))
    }
    chooseWord(data) {
        this.setState({ words: data })
    }
    selectWord(word) {
        socket.emit('skribol-chooseWord', word)
    }
    word(data) {
       this.setState({ words: null, currentPlayerWord: data })
    }
    hint(data) {
        this.setState({ words: null, currentPlayerWord: data })
    }
    render() { 
        return (
            <>
            <div className="skribol-top">
                { this.state.currentPlayerWord }
            </div>
            <div className="page-container">
                <div className="main-width position-relative">
                    { this.state.words ?
                    <div className="skribol-select-word">
                    { this.state.words.map(word => 
                        <button className="my-1 grey" onClick={ this.selectWord.bind(this, word)}>{ word }</button>
                    )} 
                    </div> : null}
                    <Canvas />
                </div>
            </div>
            </>
        );
    }
}
 
export default Skribol;