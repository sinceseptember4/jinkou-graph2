import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
import { render } from "@testing-library/react";
ChartJS.register(...registerables);


type Props = {
  data: {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        borderColor: string;
    }[];
}
}
const options: {} = {
  maintainAspectRatio: false,
  responsive: false
}; 


const Width :number=  document.documentElement.clientWidth*0.9; 
const Height :number= Width*0.5;


const graph = (props: Props) => {
  
  

  return <>     
  {console.log(props.data)}
        <Line
      height={Height}
      width={Width}
      data={props.data}
      options={options}
      id="chart-key" 
      />
  </>
  

}

  export default graph;