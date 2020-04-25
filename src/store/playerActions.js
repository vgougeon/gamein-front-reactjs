import store from '../store';
import axios from 'axios';
const actions = {
    playOst: (id, playlist = []) => {
        axios.get('/api/getOst?id=' + id).then(res => {
            store.dispatch({ 
                type: 'PLAYER_SET_DATA', 
                videoId: res.data.video_id,
                playlist: playlist,
                data: res.data
            })
        })
    },
    changeOst: (id) => {
        axios.get('/api/getOst?id=' + id).then(res => {
            store.dispatch({ 
                type: 'PLAYER_SET_DATA_FROM_PLAYLIST', 
                videoId: res.data.video_id,
                data: res.data
            })
        })
    },
    setUnplayable: (videoId) => {
        store.dispatch({ 
            type: 'PLAYER_SET_UNPLAYABLE', 
            videoId: videoId
        })
    }
}
export default actions;