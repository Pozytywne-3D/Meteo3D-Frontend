import React from 'react';
import { Line } from 'react-chartjs-2';


const Chart = ({ mesData, dataLegend, endPoint }) => {
  if (mesData){
    if (mesData[endPoint]){
      const translateLegend = data => {
        switch (data) {
          case 'airhum':
            return 'Wilgotność powietrza'
          case 'atmpress':
            return 'Ciśnienie atmosferyczne'
          case 'iaqpm10':
            return 'Index IAQ'
          case 'iaqpm25':
            return 'Index IAQ2'
          default:
            return 'Temperatura powietrza';
        }
      }

      const getHoursArray = () => {
        const date = new Date()
        const currentHour = date.getHours()

        let size = mesData[endPoint].lastMeasurement
        let newArray = [currentHour]
        let now

        while (size >= 2) {
          date.setHours(date.getHours() - newArray.length)
          now = date.getHours()
          newArray.push(now)
          date.setHours(currentHour)

          size--
        }

        return newArray.reverse()
      }

      const getHourlyData = (legendPoint) => {
        const data = mesData[endPoint]

        let size = mesData[endPoint].lastMeasurement
        let hourlyArray = []
        
        while (size >= 1) {
          hourlyArray.push(data[`m${size}`][legendPoint])
          size--
        }

        return hourlyArray
      }

  

      //! Data for chart
      const data = {
        labels: getHoursArray(),
        datasets: [
          {
            label: translateLegend(dataLegend),
            fill: false,
            lineTension: .5,
            backgroundColor: '',
            borderColor: '#ffcc00',
            pointBorderColor: '#ffcc00',
            pointBackgroundColor: '#ffcc00',
            pointBorderWidth: 1,
            pointHoverRadius: 1,
            pointHoverBackgroundColor: '#000',
            pointHoverBorderColor: '#000',
            pointHoverBorderWidth: 5,
            pointRadius: 2,
            pointHitRadius: 10,
            data: getHourlyData(dataLegend)
          }
        ]
      };
      return(
        <div className="presentation_info__chart_block--chart">
          <Line data={data} />
        </div>
      )
    }else{
      return (
        <h1 className="no-data">Brak danych</h1>
      )
    }
  }else{
    return(
      <h1 className="no-data">Brak danych</h1>
    )
  }
}


export default Chart