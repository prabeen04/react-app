import React from 'react';
import { Bubble } from 'react-chartjs-2';

const data ={
    labels: ['January','February', 'March', 'April'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [{x:10,y:20,r:5},{x:20,y:80,r:15},{x:-10,y:120,r:25},{x:50,y:30,r:80}]
      }
    ]
  };
 const BubbleChart = (props) => {
    return(
        <Bubble data={data} height={100} />
    );
 }

 export default BubbleChart;