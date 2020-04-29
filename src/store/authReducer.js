// eslint-disable-line no-unused-vars
const initialState = {
    auth: false,
    isLoading: true,
    loginlayout: false
}
let authReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'AUTH_SET_USER' :
            return { ...state, auth: action.auth, isLoading: false}
        case 'AUTH_TOGGLE_LOGIN' :
            return { ...state, loginlayout: !state.loginlayout}
        case 'AUTH_IS_LOADING' :
            return { ...state, isLoading: true }
        case 'AUTH_RESET' :
            return { ...state, isLoading: false, auth: false}
        case 'AUTH_ADD_XP':
            return { ...state, auth: {...state.auth, experience: state.auth.experience + action.amount, level: 1 + Math.trunc((state.auth.experience + action.amount) / 10) }}

        default:
            return state
    }
}
export default authReducer;
