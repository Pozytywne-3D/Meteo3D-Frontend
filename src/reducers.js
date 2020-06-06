import { combineReducers } from 'redux'
import stateReducer from './app/duck'


const rootReducer = combineReducers({
  states: stateReducer
})


export default rootReducer
