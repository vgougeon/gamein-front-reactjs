import store from '../store';
import socket from '../services/socket/openSocket';
const actions = {
    setSocketId: async (socketId) => {
        store.dispatch({ type: 'SOCKET_SET', socketId: socketId})
    },
}
socket.on('ready',(socketId) => {
    actions.setSocketId(socketId)
})
export default actions;