import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
Chart.register(...registerables);

export interface ISugarBolusData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
  }[];
  title: string;
}
interface ISugarBolusProps {
  data: ISugarBolusData;
}

export const SugarBolusChart = (props: ISugarBolusProps) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{props.data.title}</h2>
      <Line
        data={props.data}
        options={{
          plugins: {
            title: {
              display: false,
              text: "Average Sugar Reading",
            },

            legend: {
              display: true,
            },
          },
          //   borderColor: "#3751a5",
        }}
      />
    </div>
  );
};

export default SugarBolusChart;
