import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import PresentationInfo from './presentation-info'
import SelectInfo from "./choose-info";
import Chart from './chart'
import SelectStation from "./select-station";
import StationInfo from "./station-info";


const PropperApp = ({ endPoint, chooseInfo }) => {
  const [data, setData] = useState()

  useEffect(() => {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    const url = 'https://meteo3d-d1068.web.app/measurements'

    fetch(proxyurl + url)
      .then(response => response.json())
      .then(contents => setData(contents.measurements))

  }, [])

  return (
    <section id="stacje" className="propper-app">
      <SelectStation />
      <StationInfo data={data} />
      <PresentationInfo data={data} />
      <div className="presentation_info__chart_block">
        <Chart mesData={data} dataLegend={chooseInfo} endPoint={endPoint} />
        <SelectInfo />
      </div>
    </section>
  )
}

const stateToProps = ({ states }) => ({
  endPoint: states.endPoint,
  chooseInfo: states.chooseInfo
})


export default connect(stateToProps, [])(PropperApp)