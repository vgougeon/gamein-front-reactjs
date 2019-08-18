import store from '../store';
import socket from '../services/socket/openSocket';
import axios from 'axios';
let id = 0
const actions = {
    sendMessage: (message) => {
        let data = {
            id: id++,
            message: message,
            username: 'Njak',
            avatar: '61563909495.png' 
        }
        // console.log(data)
        // store.dispatch({ type: 'SOCIAL_ADD_MESSAGE', message: data})
    },
    addMessage: async (data) => {
        data.id = id++
        let auth = await store.getState().auth.auth
        console.log(auth.id)
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
        // const index = Data.findIndex(item => item.name === 'John');
        axios.get('http://54.37.228.12/api/getFriends').then(res => {
            if(res.data !== false){
                console.log(res.data)
                store.dispatch({ type: 'SOCIAL_SET_FRIENDLIST', friends: res.data})
                console.log(store.getState())
            }
        })
    }
}
actions.getFriends()
socket.on('new',(data) => {
    console.log(data)
    actions.addMessage(data)
    console.log(store.getState())
})
export default actions;