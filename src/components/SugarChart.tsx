import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
Chart.register(...registerables);

export interface ISugarData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
  }[];
}
interface ISugarProps {
  data: ISugarData;
}

export const SugarChart = (props: ISugarProps) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Days Average Blood Sugar Reading</h2>
      <Line
        data={props.data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Average Sugar Reading",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default SugarChart;
