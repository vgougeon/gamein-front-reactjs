import socket from '../services/listener/openSocket'
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