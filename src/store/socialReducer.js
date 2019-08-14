import socket from '../services/socket/openSocket'
import chatListener from '../services/socket/chatListener';
const initialState = {
    messages: [
        {
            username: 'Njak', 
            message: 'Salut les copains, message de test'
        }
    ]
}

let socialReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'SOCIAL_ADD_MESSAGE' :
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