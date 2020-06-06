import React from "react";


const PresentationInfoDOM = ({temp, airhum, atmpress, pm10, pm25}) => {
  return(
    <>
      <div className="presentation_info__table">
        <div className="presentation_info__table__element">
          <h4 className="presentation_info__table__element--title">Temperatura powietrza</h4>
          <p className="presentation_info__table__element--info">{temp}</p>
        </div>
        <div className="presentation_info__table__element">
          <h4 className="presentation_info__table__element--title">Wilgotność powietrza</h4>
          <p className="presentation_info__table__element--info">{airhum}</p>
        </div>
        <div className="presentation_info__table__element">
          <h4 className="presentation_info__table__element--title">Ciśnienie atmosferyczne</h4>
          <p className="presentation_info__table__element--info">{atmpress}</p>
        </div>
        <div className="presentation_info__table__element">
          <h4 className="presentation_info__table__element--title">PM10</h4>
          <p className="presentation_info__table__element--info ">{pm10}</p>
        </div>
        <div className="presentation_info__table__element">
          <h4 className="presentation_info__table__element--title">PM2.5</h4>
          <p className="presentation_info__table__element--info ">{pm25}</p>
        </div>
      </div>
    </>
  )
}


export default PresentationInfoDOM
