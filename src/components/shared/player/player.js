import React, { Component } from 'react';
import './player.scss';
import { connect } from 'react-redux';
import Youtube from 'react-youtube';
class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <React.Fragment>
            { this.props.playing && this.props.videoId !== false &&
            <div id="player">
                <Youtube videoId={ this.props.videoId} 
                opts={{ height:'1', width:'1', playerVars:{
                    autoplay: 1
                }}} />
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