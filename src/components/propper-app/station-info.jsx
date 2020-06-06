import React, {useEffect, useState} from "react";
import { connect } from 'react-redux'


const StationInfo = ({ endPoint }) => {

  const [station, setStation] = useState()

  useEffect(() => {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    const url = 'https://meteo3d-d1068.web.app/stations'

    fetch(proxyurl + url)
      .then(response => response.json())
      .then(contents => setStation(contents.stations))
  }, [])

  const returnElements = (number, name) => (
      <header className="presentation_info__header">
        <h2 className="presentation_info__header--text">Stacja nr. {number}</h2>
        <p className="presentation_info__header--title">{name}</p>
      </header>
  )

  if (station) {
    const stationInfo = station[endPoint]

    if(stationInfo){
      return returnElements(stationInfo.number, stationInfo.name)
      }else{
        return returnElements('NaN', 'NaN')
      }
  } else {
    return <h1 className="no-data">Wczytywanie...</h1>
  }
}

const stateToProps = ({ states }) => ({
  endPoint: states.endPoint,
  chooseInfo: states.chooseInfo
})

export default connect(stateToProps, [])(StationInfo)
