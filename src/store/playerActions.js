import store from '../store';
import axios from 'axios';
const actions = {
    playOst: (id) => {
        axios.get('http://54.37.228.12/api/getOst?id=' + id).then(res => {
            console.log(res.data)
            store.dispatch({ type: 'PLAYER_SET_DATA', videoId: res.data.video_id, data: res.data})
        })
    }
}
export default actions;