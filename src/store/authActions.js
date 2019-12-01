import store from '../store';
import axios from 'axios';
if (localStorage.getItem("token") !== null) {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem("token")
}

class AuthActions {
    constructor() {
        this.getMe()
    }
    getMe() {
        axios.get('http://54.37.228.12/api/me').then(res => {
            if(res.data.id !== undefined){
                store.dispatch({ type: 'AUTH_SET_USER', auth: res.data})
            }
        })
    }
    toggleLogin() {
        store.dispatch({ type: 'AUTH_TOGGLE_LOGIN'})
    }
    signIn(username, password) { 
        store.dispatch({ type: 'AUTH_IS_LOADING'})
        axios.post('http://54.37.228.12/api/signIn', 
        { params: { 
            username: username,
            password: password
        }})
        .then(res => {
            if(res.data !== false){
                localStorage.setItem("token", res.data);
                axios.defaults.headers.common['Authorization'] = res.data;
                this.toggleLogin()
                this.getMe()
            }
        })
    }
    signOut() {
        localStorage.setItem("token", null);
        delete axios.defaults.headers.common["Authorization"];
        store.dispatch({ type: 'AUTH_RESET'})
    }
}
let authActions = new AuthActions()
export default authActions;