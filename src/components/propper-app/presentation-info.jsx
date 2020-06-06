import React from "react";
import { connect } from 'react-redux'
import PresentationInfoDOM from './presentation-info-dom'


const PresentationInfo = ({  endPoint, data }) => {

  if (data){
    if (data[endPoint]) {
      const mess = data[endPoint].m1

      const px10check = (value) => {
        if (value < 50) {
          return (<span className="iaq_index" style={{ backgroundColor: '#449911' }}>{value} - Dobry</span>)
        } else if (value > 50 && value <= 200) {
          return (<span className="iaq_index" style={{ backgroundColor: 'orange' }}>{value} - Dostateczny</span>)
        } else {
          return (<span className="iaq_index" style={{ backgroundColor: 'red' }}>{value} - Zły</span>)
        }
      }
      const px25check = (value) => {
        if (value < 35) {
          return (<span className="iaq_index" style={{ backgroundColor: '#449911' }}>{value} - Dobry</span>)
        } else if (value > 35 && value <= 75) {
          return (<span className="iaq_index" style={{ backgroundColor: 'orange' }}>{value} - Dostateczny</span>)
        } else {
          return (<span className="iaq_index" style={{ backgroundColor: 'red' }}>{value} - Zły</span>)
        }
      }

      return <PresentationInfoDOM temp={`${mess.airtemp}°C`} airhum={`${mess.airhum}%`} atmpress={`${mess.atmpress} hpa`} pm10={px10check(mess.pm10)} pm25={px25check(mess.pm25)} />

    }else{
      return <PresentationInfoDOM temp='NaN' airhum='NaN' atmpress='NaN' pm10='NaN' pm25='NaN' />
    }
  }else{
    return <h1 className="no-data">Wczytywanie...</h1>
  }
}

const stateToProps = ({ states }) => ({
  endPoint: states.endPoint,
  chooseInfo: states.chooseInfo
})


export default connect(stateToProps, [])(PresentationInfo)
