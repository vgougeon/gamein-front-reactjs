// eslint-disable-line no-unused-vars
import actions from './playerActions';
const initialState = {
    playing: true,
    videoId: false
}
let authReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'PLAYER_SET_VIDEO' :
            return { ...state, videoId: action.videoId}
        default:
            return state
    }
}
export default authReducer;