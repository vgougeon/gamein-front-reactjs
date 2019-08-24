// eslint-disable-line no-unused-vars
import socket from '../services/socket/openSocket'
const initialState = {
    status: false
}

let socketReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state
    }
}
export default socketReducer;