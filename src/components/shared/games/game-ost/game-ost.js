import React, { Component } from 'react';
import axios from 'axios';
import './game-ost.scss';
import { connect } from 'react-redux';
import Spinner from '../../spinner/spinner-standard';
class GameOst extends Component {
    constructor(props) {
        super(props);
        this.state = { osts : [], ready: false}
        this.getOsts()
    }
    getOsts = () => {
        axios.get('http://54.37.228.12/api/getGameOst', { params: { game: this.props.id} }).then(res => {
            this.setState(state => ({
                osts: res.data,
                ready: true
            }));
        })
    }
    render() { 
        return (  
            <React.Fragment>
                { this.state.ready ?
                <table className="osts">
                    <tbody>
                    { this.state.osts.map((ost) =>
                        <tr>
                            { this.props.videoId !== ost.video_id ?
                            <td className="play" onClick={() => { this.props.playOst(ost.video_id)}}>
                                <i className="fas fa-play"/>
                            </td>
                            :<td className="stop" onClick={() => { this.props.playOst(false)}}>
                                <i className="fas fa-pause"/>
                            </td>
                            }
                            <td>{ ost.name }</td>
                            <td className="like">
                                <i className="far fa-heart"/>
                            </td>
                        </tr>
                    )}                 
                    </tbody>
                </table>
                : <div className="mt-5"><Spinner /></div>}
            </React.Fragment>
        );
    }
}
 
const mapStateToProps = (state) => ({
    videoId: state.player.videoId
})
const mapDispatchToProps = (dispatch) => ({
    playOst: (videoId) => dispatch({ type: 'PLAYER_SET_VIDEO', videoId})
})
export default connect(mapStateToProps, mapDispatchToProps)(GameOst)