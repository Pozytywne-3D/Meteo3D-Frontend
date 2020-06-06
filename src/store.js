import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore } from "redux";
import rootReducer from './reducers'


const store = createStore(rootReducer, composeWithDevTools())
window.store = store


export default store