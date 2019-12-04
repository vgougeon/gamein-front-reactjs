import store from '../store';
import axios from 'axios';
const actions = {
    playOst: (id) => {
        axios.get('/api/getOst?id=' + id).then(res => {
            store.dispatch({ type: 'PLAYER_SET_DATA', videoId: res.data.video_id, data: res.data})
        })
    }
}
export default actions;