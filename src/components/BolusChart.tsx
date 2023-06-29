import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
Chart.register(...registerables);

export interface IBolusData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
  }[];
}
interface IBolusProps {
  data: IBolusData;
}

export const BolusChart = (props: IBolusProps) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Days Insulin Intake (in Units) </h2>
      <Line
        data={props.data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Insulin Intake",
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

export default BolusChart;
