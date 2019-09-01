// eslint-disable-line no-unused-vars
import actions from './playerActions';
const initialState = {
    playing: true,
    videoId: false,
    data: {}
}
let authReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'PLAYER_SET_VIDEO' :
            return { ...state, videoId: action.videoId}
        case 'PLAYER_SET_DATA' :
            return { ...state, videoId: action.videoId, data: action.data}
        default:
            return state
    }
}
export default authReducer;