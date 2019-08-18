import store from '../store';
import socket from '../services/socket/openSocket';
import { async } from 'q';
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
    }
}
socket.on('new',(data) => {
    console.log(data)
    actions.addMessage(data)
    console.log(store.getState())
})
export default actions;