import openSocket from 'socket.io-client';
const socket = openSocket('54.37.228.12:3000');
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
        default:
            return state
    }
}

export default socialReducer;