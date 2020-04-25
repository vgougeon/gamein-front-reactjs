// eslint-disable-line no-unused-vars
const initialState = {
    playing: true,
    playlist: [],
    videoId: false,
    unplayable: [],
    data: {}
}
let authReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'PLAYER_SET_VIDEO' :
            return { ...state, videoId: action.videoId}
        case 'PLAYER_SET_DATA' :
            return { ...state, videoId: action.videoId, data: action.data, playlist: action.playlist}
        case 'PLAYER_SET_DATA_FROM_PLAYLIST' :
            return { ...state, videoId: action.videoId, data: action.data}
        case 'PLAYER_SET_UNPLAYABLE' :
            console.log(state.unplayable)
            return { ...state, unplayable: [...state.unplayable, action.videoId]}
        default:
            return state
    }
}
export default authReducer;