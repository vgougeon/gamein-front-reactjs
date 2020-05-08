// eslint-disable-line no-unused-vars
const initialState = {
    status: false,
    gameState: null
}

let socketReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "SOCKET_SET":
            return { ...state, status: action.socketId }
        case "SOCKET_GAME_SET":
            return { ...state, gameState: action.gameState }
        default:
            return state
    }
}
export default socketReducer;