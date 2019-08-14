import { createStore, combineReducers } from 'redux'
import socialReducer from './store/socialReducer';

const reducer = combineReducers({
    social: socialReducer
})

const store = createStore(reducer)

export default store;
