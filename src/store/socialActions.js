import store from '../store';
import socket from '../services/socket/openSocket';
import axios from 'axios';
let id = 0
const actions = {
    sendMessage: (message) => {
        // let data = {
        //     id: id++,
        //     message: message,
        //     username: 'Njak',
        //     avatar: '61563909495.png' 
        // }
        // store.dispatch({ type: 'SOCIAL_ADD_MESSAGE', message: data})
    },
    addMessage: async (data) => {
        data.id = id++
        let auth = await store.getState().auth.auth
        if(data.userId === auth.id){
            data.userId = data.target
        }
        store.dispatch({ type: 'SOCIAL_ADD_MESSAGE', message: data})
    },
    chatWith: (id) => {
        if(id === store.getState().social.currentChat){
            store.dispatch({ type: 'SOCIAL_CHAT_WITH', id: null})
        }
        else {
            store.dispatch({ type: 'SOCIAL_CHAT_WITH', id: id})
        }
    },
    getFriends: () => {
        axios.get('/api/getFriends').then(res => {
            if(res.data !== false){
                store.dispatch({ type: 'SOCIAL_SET_FRIENDLIST', friends: res.data})
            }
        })
    }
}
actions.getFriends()
socket.on('new',(data) => {
    actions.addMessage(data)
})
export default actions;