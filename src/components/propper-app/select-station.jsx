import React from "react";
import actions from "../../app/duck/actions";
import { connect } from 'react-redux'


const SelectStation = props => {

  const handleChange = e => {
    props.changeStation(e.target.value)
  }

  return(
    <div className="propper-app__select_station">
      <select className="propper-app__select_station--select" defaultValue='la' onChange={handleChange}>
        <option value="la">Liceum akademickie</option>
        <option value="ti">Technikum informatyczne</option>
        <option value="hosp">Hospicujm w pucku</option>
      </select>
    </div>
  )
}

const setToProps = dispatch => ({
  changeStation: endPoint => dispatch(actions.changeStation(endPoint))
})


export default connect(null, setToProps)(SelectStation)