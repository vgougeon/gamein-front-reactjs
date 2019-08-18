import socket from '../services/socket/openSocket'
import actions from './socialActions';
const initialState = {
    messages: {},
    currentChat: null
}
let socialReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'SOCIAL_ADD_MESSAGE' :
            if(state.messages[action.message.userId] === undefined){
                return { ...state, messages: { ...state.messages, [action.message.userId] : [ action.message]}}
            }
            else {
                return { ...state, messages: { ...state.messages, [action.message.userId] : [...state.messages[action.message.userId], action.message]}}
            }
        case 'SOCIAL_SEND_MESSAGE' :
            socket.emit('new-message', { ...action.message, to: state.currentChat })
            return state
        case 'SOCIAL_CHAT_WITH' :
            if(!state.messages[action.id]){
                return { ...state, currentChat: action.id, messages: { ...state.messages, [action.id] : []}}
            }
            else {
                return { ...state, currentChat: action.id}
            }
        default:
            return state
    }
}
export default socialReducer;