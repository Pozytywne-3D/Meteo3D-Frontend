import types from './types'

const changeStation = item => ({
  type: types.CHANGE_STATION, item
})
const changeChooseInfo = item => ({
  type: types.CHANGE_CHOOSE_INFO, item
})
const reset = item => ({
  type: types.RESET_STATION, item
})

export default {
  changeStation,
  changeChooseInfo,
  reset
}