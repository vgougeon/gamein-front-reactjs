import { createStore, combineReducers } from 'redux'
import socialReducer from './store/socialReducer';
import socketReducer from './store/socketReducer';
import authReducer from './store/authReducer';
import playerReducer from './store/playerReducer';
import popupReducer from './store/popupReducer';


const reducer = combineReducers({
    auth: authReducer,
    social: socialReducer,
    socket: socketReducer,
    player: playerReducer,
    popup: popupReducer
})

const store = createStore(reducer)

export default store;
