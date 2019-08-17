import store from '../store';
import socket from '../services/socket/openSocket';
let id = 0
const actions = {
    sendMessage: (message) => {
        let data = {
            id: id++,
            message: message,
            username: 'Njak', // from user store
            avatar: '61563909495.png' // from user store
        }
        console.log(data)
        store.dispatch({ type: 'SOCIAL_ADD_MESSAGE', message: data})
    },
    addMessage: (data) => {
        data.id = id++
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
    actions.addMessage(data)
})
export default actions;