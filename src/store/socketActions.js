import store from '../store';
import socket from '../services/socket/openSocket';
const actions = {
    setSocketId: async (socketId) => {
        store.dispatch({ type: 'SOCKET_SET', socketId: socketId})
    },
    startGame: async (gameState) => {
        store.dispatch({ type: 'SOCKET_GAME_SET', gameState: gameState})
    }
}
socket.on('ready',(socketId) => {
    actions.setSocketId(socketId)
})
socket.on('startGame', actions.startGame)
export default actions;