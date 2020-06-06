import React from "react";
import { connect } from 'react-redux'
import actions from "../../app/duck/actions"

import tempIcon from '../../img/temp.svg'
import hpa from '../../img/hpa.svg'
import index from '../../img/index.svg'
import wet from '../../img/wet.svg'

const SelectInfo =  props => {
  const handleClick = e => {
    props.changeChooseInfo(e.target.value)
  }

  return (
    <form className="presentation_info__choose_form">
      <div>
        <input onClick={handleClick} name="choose-weather-info" type="radio" value="airtemp" id="airtemp" className="check" defaultChecked/>
        <label className="presentation_info__choose_form--label" htmlFor="airtemp"><img src={tempIcon} alt="icon" /> <p>Temperatura powietrza</p></label>
      </div>
      <div>
        <input onClick={handleClick} name="choose-weather-info" type="radio" value="airhum" id="airhum" className="check" />
        <label className="presentation_info__choose_form--label" htmlFor="airhum"><img src={wet} alt="icon" /> <p>Wilgotność powietrza</p></label>
      </div>
      <div>
        <input onClick={handleClick} name="choose-weather-info" type="radio" value="atmpress" id="atmpress" className="check" />
        <label className="presentation_info__choose_form--label" htmlFor="atmpress"><img src={hpa} alt="icon" /> <p>Ciśnienie atmosferyczne</p></label>
      </div>
      <div>
        <input onClick={handleClick} name="choose-weather-info" type="radio" value="iaqpm10" id="iaqpm10" className="check" />
        <label className="presentation_info__choose_form--label" htmlFor="iaqpm10"><img src={index} alt="icon" /> <p>PM10</p></label>
      </div>
      <div>
        <input onClick={handleClick} name="choose-weather-info" type="radio" value="iaqpm25" id="iaqpm25" className="check" />
        <label className="presentation_info__choose_form--label" htmlFor="iaqpm25"><img src={index} alt="icon" /> <p>PM2.5</p></label>
      </div>
    </form>
  )
}

const setToProps = dispatch => ({
  changeChooseInfo: chooseInfo => dispatch(actions.changeChooseInfo(chooseInfo))
})


export default connect(null, setToProps)(SelectInfo)