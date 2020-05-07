// eslint-disable-line no-unused-vars
const initialState = {
    status: false
}

let socketReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "SOCKET_SET":
            return { ...state, status: action.socketId }
        default:
            return state
    }
}
export default socketReducer;