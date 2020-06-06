import types from './types'
  
const INITIAL_STATE = {
  endPoint: 'la',
  chooseInfo: 'airtemp'
}

const stateData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CHANGE_STATION:
      return { 
        ...state,
        endPoint: action.item
        
      }
    case types.CHANGE_CHOOSE_INFO:
      return {
        ...state,
        chooseInfo: action.item
      }
    case types.RESET_STATION:
      return {...state, selectedStation: null}
    default:
      return state
  }
}


export default stateData


