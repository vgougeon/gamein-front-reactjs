import socket from '../services/listener/openSocket'
import chatListener from '../services/listener/chatListener';
const initialState = {
    messages: []
}
let id = 0
let socialReducer = (state = initialState, action = {}) => {
    console.log(state)
    switch (action.type) {
        case 'SOCIAL_ADD_MESSAGE' :
            action.message.id = id++
            return { ...state, messages: [...state.messages, action.message]}
        case 'SOCIAL_SEND_MESSAGE' :
            socket.emit('new-message', action.message)
            return state
        default:
            return state
    }
}
chatListener()
export default socialReducer;