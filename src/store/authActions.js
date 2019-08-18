import store from '../store';
import axios from 'axios';
if (localStorage.getItem("token") !== null) {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem("token")
}
const actions = {
    getMe: () => {
        axios.get('http://54.37.228.12/api/me').then(res => {
            if(res.data.id !== undefined){
                store.dispatch({ type: 'AUTH_SET_USER', auth: res.data})
                console.log(store.getState())
            }
        })
    }
}
actions.getMe()
export default actions;