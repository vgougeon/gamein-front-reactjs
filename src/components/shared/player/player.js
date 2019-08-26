import React, { Component } from 'react';
import './player.scss';
import { connect } from 'react-redux';
class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <React.Fragment>
            { this.props.playing &&
            <div id="player"></div>
            }
            </React.Fragment>
        );
    }
}
 
const mapStateToProps = (state) => ({
    playing: state.player.playing
})
export default connect(mapStateToProps)(Player)