import React, { Component } from 'react';
import './player.scss';
import { connect } from 'react-redux';
import Youtube from 'react-youtube';
class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            duration: 0,
            progress: 0,
        }
    }
    getInfo = (event) => {
        this.setState({
            duration: event.target.getDuration(),
            progress: 1
        })
        this.interval = setInterval(
            () => {
                this.setState(prevState => {
                    return { progress: prevState.progress + 1 };
                });
            },
            1000
        )
    }
    resetInfo = (event) => {
        clearInterval(this.interval)
        this.setState({
            progress: 0
        })
    }
    render() { 
        return (
            <React.Fragment>
            { this.props.playing && this.props.videoId !== false &&
            <div id="player">
                <div className="player-progress" style={{ width: '' + (this.state.progress / this.state.duration) * 100 + '%'}}>
                </div>
                <div className="video-container">
                <Youtube videoId={ this.props.videoId} 
                opts={{ height:'0', width:'0', playerVars:{
                    autoplay: 1
                }}} 
                onPlay={this.getInfo}
                onEnd={this.resetInfo}
                />
                </div> 
            </div>
            }
            </React.Fragment>
        );
    }
}
 
const mapStateToProps = (state) => ({
    playing: state.player.playing,
    videoId: state.player.videoId
})
export default connect(mapStateToProps)(Player)