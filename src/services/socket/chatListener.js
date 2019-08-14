import socket from './openSocket'
import store from '../../store'
const chatListener = () => {
    socket.on('new',(data) => {
        store.dispatch({ type:'SOCIAL_ADD_MESSAGE', message: data})
    })
}
export default chatListener