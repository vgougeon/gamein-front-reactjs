import { createStore, combineReducers } from 'redux'
import socialReducer from './store/socialReducer';
import socketReducer from './store/socketReducer';


const reducer = combineReducers({
    social: socialReducer,
    socket: socketReducer
})

const store = createStore(reducer)

export default store;
