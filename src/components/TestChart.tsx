import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
Chart.register(...registerables);

export interface ITestData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
  }[];
}
interface ITestProps {
  data: ITestData;
}

export const TestChart = (props: ITestProps) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Days Number of Blood Sugar Tests </h2>
      <Line
        data={props.data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Number of Blood Sugar Tests",
            },
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              min: 4,
              max: 13,
            },
          },
        }}
      />
    </div>
  );
};

export default TestChart;
