import React, { Component } from 'react';
import './player.scss';
import { connect } from 'react-redux';
import Youtube from 'react-youtube';
import Spinner from '../spinner/spinner-standard';
class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            duration: 0,
            progress: 0,
            videoId: false,
            player: false,
            status: -1
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.videoId !== this.state.videoId){
            clearInterval(this.interval)
            this.setState({
                videoId: this.props.videoId,
                progress: 0
            })
        }
    }
    getPlayer = (event) => {
        this.setState({
            player: event.target
        })
    }
    updateState = (event) => {
        console.log(event.data)
        this.setState({
            status: event.data
        })
    }
    getInfo = (event) => {
        clearInterval(this.interval)
        this.setState({
            duration: event.target.getDuration(),
        })
        this.timeStart()
    }
    timeStart = () => {
        this.interval = setInterval(
            () => {
                this.setState(prevState => {
                    return { progress: prevState.progress + .1 };
                });
            },
            100
        )
    }
    resetInfo = (event) => {
        clearInterval(this.interval)
        this.setState({
            progress: 0
        })
    }
    pause = () => {
        this.state.player.pauseVideo()
        clearInterval(this.interval)
    }
    play = () => {
        this.state.player.playVideo()
        this.timeStart()
    }
    render() { 
        return (
            <React.Fragment>
            <div id="player" className={ this.props.playing && this.props.videoId !== false ? 'show' : ''}>
                
                <div className="video-container">
                <Youtube videoId={ this.props.videoId} 
                opts={{ height:'0', width:'0', playerVars:{
                    autoplay: 1
                }}}
                onReady={this.getPlayer}
                onPlay={this.getInfo}
                onStateChange={this.updateState}
                />
                </div>

                <div className="player-progress" 
                style={{ width: '' + (this.state.progress / this.state.duration) * 100 + '%'}}>
                </div>
                
                <div className="info">
                    <div className="data"></div>
                    <div className="actions">
                        <i className="fas fa-random"/>
                        <i className="fas fa-step-backward"/>
                        <div className="middle-button">
                            { this.state.status === 1 &&
                            <i className="fas fa-pause" onClick={ this.pause }/>
                            }
                            { this.state.status === 2 &&
                            <i className="fas fa-play" onClick={ this.play }/>
                            }
                            { (this.state.status === 3 || this.state.status === -1 || this.state.status === 0) &&
                            <Spinner size='40'/>
                            }
                        </div>
                        <i className="fas fa-step-forward"/>
                        <i className="fas fa-redo-alt"/>
                    </div>
                    <div className="right"></div>
                </div>
                 
            </div>
            </React.Fragment>
        );
    }
}
 
const mapStateToProps = (state) => ({
    playing: state.player.playing,
    videoId: state.player.videoId
})
export default connect(mapStateToProps)(Player)