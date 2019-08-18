import { createStore, combineReducers } from 'redux'
import socialReducer from './store/socialReducer';
import socketReducer from './store/socketReducer';
import authReducer from './store/authReducer';

const reducer = combineReducers({
    auth: authReducer,
    social: socialReducer,
    socket: socketReducer
})

const store = createStore(reducer)

export default store;
