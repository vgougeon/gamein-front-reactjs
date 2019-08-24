// eslint-disable-line no-unused-vars
import actions from './authActions';
const initialState = {
    auth: {},
    isLoading: true,
    isLoggedIn: false,

    loginlayout: false
}
let authReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'AUTH_SET_USER' :
            return { ...state, auth: action.auth}
        default:
            return state
    }
}
export default authReducer;