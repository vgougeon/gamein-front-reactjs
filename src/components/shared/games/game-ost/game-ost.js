import React, { Component } from 'react';
import axios from 'axios';
import './game-ost.scss';
import { connect } from 'react-redux';
import Spinner from '../../spinner/spinner-standard';
import player from '../../../../store/playerActions';
import LikeOST from '../../player/likeOst/likeOst';
class GameOst extends Component {
    constructor(props) {
        super(props);
        this.state = { osts : [], ready: false}
        this.getOsts()
    }
    getOsts = () => {
        axios.get('/api/getGameOst', { params: { game: this.props.id} }).then(res => {
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
                        <tr key={ ost.id } className={ 
                            ((this.props.unplayable.findIndex((a) => ost.video_id === a)) === -1) ? "" : "unplayable"
                        }>
                            { this.props.videoId !== ost.video_id ?
                            <td className="play" onClick={() => { player.playOst(ost.id, this.state.osts)}}>
                                <i className="fas fa-play"/>
                            </td>
                            :<td className="stop" onClick={() => { this.props.playOst(false)}}>
                                <i className="fas fa-pause"/>
                            </td>
                            }
                            <td>{ ost.name }</td>
                            <td className="listens"><i className="fas fa-compact-disc"></i><span>{ ost.plays }</span></td>
                            <td className="like">
                                <LikeOST id={ ost.id } liked={ ost.liked } likes={ ost.likes }/>
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
    videoId: state.player.videoId,
    unplayable: state.player.unplayable
})
const mapDispatchToProps = (dispatch) => ({
    playOst: (videoId) => dispatch({ type: 'PLAYER_SET_VIDEO', videoId})
})
export default connect(mapStateToProps, mapDispatchToProps)(GameOst)