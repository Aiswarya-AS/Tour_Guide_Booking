import React, { useState, useEffect } from "react";
import Chart from 'react-apexcharts';

function MostSelectedGuideChart(props) {
    const [chartData, setChartData] = useState({
        options: {
          chart: {
            id: 'basic-bar'
          },
          xaxis: {
            categories:'',
          }
        },
        series: [
          {
            name: 'Count',
            data: 0, 
          }
        ]
      });
 useEffect(()=>{
    setChartData({
        options: {
          chart: {
            id: 'basic-bar'
          },
          xaxis: {
            categories: props.guide_name
          }
        },
        series: [
          {
            name: 'Count',
            data: props.guide_count
          }
        ]
      });
      
 },[chartData])
  return (
    <div>
      <Chart options={chartData.options} series={chartData.series} type="bar" height={300}  width={330}/>
    </div>
  )
}

export default MostSelectedGuideChart;
