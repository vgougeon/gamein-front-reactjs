import React, { Component } from 'react';
import './player.scss';
import { connect } from 'react-redux';
import Youtube from 'react-youtube';
import Spinner from '../spinner/spinner-standard';
import { Link } from 'react-router-dom';
import LikeOST from './likeOst/likeOst';
import Volume from './volume/volume';
import Img from '../img/img';
class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            duration: 0,
            progress: 0,
            videoId: false,
            player: false,
            status: -1,
            volume: 0
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
            volume: event.target.getVolume()
        })
        this.timeStart()
    }
    getCurrentTime = () => {
        return (this.state.player === false) ? 0 : this.state.player.getCurrentTime();
    }
    timeStart = () => {
        this.interval = setInterval(
            () => {
                this.setState(prevState => {
                    return { 
                        progress: this.getCurrentTime()
                    };
                });
            },
            200
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
    playerTime = (event) => {
        this.state.player.seekTo(event.target.value)
        this.setState({
            progress: event.target.value
        })
        console.log(this.props.ostData)
    }
    setVolume = (event) => {
        let volume = typeof(event) === "number" ? event : event.target.value
        this.state.player.setVolume(volume);
        this.setState({ volume: volume });
    }
    getError = (event) => {
        console.log(event)
    }
    getProgress = () => {
        const progressM = String(Math.floor(this.state.progress / 60)).padStart(2, '0');
        const progressS = String(Math.floor(this.state.progress % 60)).padStart(2, '0');
        const durationM = String(Math.floor(this.state.duration / 60)).padStart(2, '0');
        const durationS = String(Math.floor(this.state.duration % 60)).padStart(2, '0');
        return progressM + ":" + progressS + " / " + durationM + ":" + durationS
    }
    render() {
        return (
            <React.Fragment>
            <div id="player" className={(this.props.playing && this.props.videoId !== false ? 'show' : '')}>
                <div className="video-container">
                <Youtube videoId={ this.props.videoId} 
                opts={{ height:'0', width:'0', playerVars:{
                    autoplay: 1
                }}}
                onReady={this.getPlayer}
                onPlay={this.getInfo}
                onStateChange={this.updateState}
                onError={this.getError}
                />
                </div>

                <div className="player-progress" 
                style={{ width: '' + (this.state.progress / this.state.duration) * 100 + '%'}}>
                    
                </div>
                <input type="range" min="0" max={ this.state.duration } 
                className="range-progress"
                value={ this.state.progress }
                onChange={ this.playerTime }>
                </input>
                { this.props.ostData.skins !== undefined &&
                <Img className="splash" src={ 'http://54.37.228.12/f/skin/' +
                this.props.ostData.skins[this.props.ostData.skins.length - 1].id
                + '.jpg'} />
                }
                <div className="info">
                    <div className="data">
                        <img src={ 'http://54.37.228.12/f/covers/' + this.props.ostData.media_id + '.jpg'} />
                        <div className="ost-data">
                            <span>{ this.props.ostData.name }</span>
                            <Link to={ '/game/' + this.props.ostData.media_id + '/ost'}>{ this.props.ostData.media_name }</Link>
                            <LikeOST id={ this.props.ostData.id } liked={ this.props.ostData.liked } likes={ this.props.ostData.likes } />
                        </div>
                    </div>
                    <div className="actions">
                        <i className="fas fa-random"/>
                        <i className="fas fa-step-backward"/>
                        <div className="middle-button">
                            { this.state.status === 1 &&
                            <i className="fas fa-pause" onClick={ this.pause }/>
                            }
                            { (this.state.status === 2 || this.state.status === 0) &&
                            <i className="fas fa-play" onClick={ this.play }/>
                            }
                            { (this.state.status === 3 || this.state.status === -1) &&
                            <Spinner size={ 30 }/>
                            }
                        </div>
                        <i className="fas fa-step-forward"/>
                        <i className="fas fa-redo-alt"/>
                        <span className="player-current-time">{ this.getProgress() }</span>
                    </div>
                    <div className="right">
                        <Volume volume={ this.state.volume } setVolume={ this.setVolume }/>
                    </div>
                </div>
                 
            </div>
            </React.Fragment>
        );
    }
}
 
const mapStateToProps = (state) => ({
    playing: state.player.playing,
    videoId: state.player.videoId,
    ostData: state.player.data
})
export default connect(mapStateToProps)(Player)