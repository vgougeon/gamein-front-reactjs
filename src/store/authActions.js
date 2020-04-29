import store from '../store';
import socket from '../services/socket/openSocket';
import axios from 'axios';
if (localStorage.getItem("token") !== null) {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem("token")
}

class AuthActions {
    constructor() {
        this.getMe()
    }
    getMe() {
        axios.get('/api/me').then(res => {
            if(res.data.id !== undefined){
                store.dispatch({ type: 'AUTH_SET_USER', auth: res.data})
            }
        })
    }
    toggleLogin() {
        store.dispatch({ type: 'AUTH_TOGGLE_LOGIN'})
    }
    async signIn(username, password) { 
        store.dispatch({ type: 'AUTH_IS_LOADING'})
        let res = await axios.post('/api/signIn', 
        { params: { 
            username: username,
            password: password
        }})
        if(res.status === 200){
            localStorage.setItem("token", res.data);
            axios.defaults.headers.common['Authorization'] = res.data;
            this.toggleLogin()
            this.getMe()
        }
        return res
    }
    async register(username, password) { 
        store.dispatch({ type: 'AUTH_IS_LOADING'})
        let res = await axios.post('/api/register', 
        { params: { 
            username: username,
            password: password
        }})
        if(res.status === 200){
            localStorage.setItem("token", res.data);
            axios.defaults.headers.common['Authorization'] = res.data;
            this.toggleLogin()
            this.getMe()
        }
        return res;
    }
    signOut() {
        localStorage.setItem("token", null);
        delete axios.defaults.headers.common["Authorization"];
        store.dispatch({ type: 'AUTH_RESET'})
    }
}
socket.on('addXp',(data) => {
    console.log("RECEIVED SOCKET addXp" + data)
})
let authActions = new AuthActions()
export default authActions;