import "./App.css";
import { useMemo } from "react";
import { bsData } from "./utils/Data";
import { bolusData } from "./utils/Data";
import BolusChart from "./components/BolusChart";
import SugarChart from "./components/SugarChart";
import { testData } from "./utils/Data";
import Button from "@mui/material/Button";
import TestChart from "./components/TestChart";
import { useState } from "react";
import SugarBolusChart from "./components/SugarBolusChart";

function App() {
  const sugarData = useMemo(
    () => ({
      labels: bsData.map((data) => data.date),
      datasets: [
        {
          label: "Average Days Sugar: ",
          data: bsData.map((data) => data.value),
        },
      ],
    }),
    []
  );

  const insulinData = useMemo(
    () => ({
      labels: bolusData.map((data) => data.date),
      datasets: [
        {
          label: "Days Total Insulin Intake: ",
          data: bolusData.map((data) => data.value),
        },
      ],
    }),
    []
  );

  const testingData = useMemo(
    () => ({
      labels: testData.map((data) => data.date),
      datasets: [
        {
          label: "Number of Blood Sugar Tests: ",
          data: testData.map((data) => data.value),
        },
      ],
    }),
    []
  );

  const sugarBolusData = useMemo(
    () => ({
      labels: bsData.map((data) => data.date),
      datasets: [
        {
          label: "Average Days Sugar: ",
          data: bsData.map((data) => data.value),
        },
        {
          label: "Days Total Insulin Intake: ",
          data: bolusData.map((data) => data.value),
        },
      ],
      title: "Avg Days Sugar and Insulin Intake",
    }),
    []
  );
  const sugarTestData = useMemo(
    () => ({
      labels: bsData.map((data) => data.date),
      datasets: [
        {
          label: "Average Days Sugar: ",
          data: bsData.map((data) => data.value),
        },
        {
          label: "Days Total Blood Tests: ",
          data: testData.map((data) => data.value),
        },
      ],
      title: "Avg Days Sugar and Number of Blood Tests",
    }),
    []
  );

  const [currentView, setCurrentView] = useState("view1");
  const startViewTwo = () => {
    setCurrentView("view2");
  };
  const startViewOne = () => {
    setCurrentView("view1");
  };
  const startViewThree = () => {
    setCurrentView("view3");
  };
  const ViewOne = () => {
    return (
      <div className="container">
        <h1> Diabetic Readings </h1>
        <h3> Built using React, Typescript, & ChartJs</h3>
        <h6>
          {" "}
          I have been a Type 1 Diabetic since three years old, and wanted to try
          my hand at creating a tool to view blood sugar readings and help a
          user to control their levels better
        </h6>
        <div className="card">
          <SugarChart data={sugarData} />
        </div>
        <div className="card">
          <BolusChart data={insulinData} />
          <Button variant="outlined" onClick={startViewTwo}>
            View With Sugar Readings
          </Button>
        </div>
        <div className="card">
          <TestChart data={testingData} />
          <Button variant="outlined" onClick={startViewThree}>
            View With Sugar Readings
          </Button>
        </div>
      </div>
    );
  };

  const ViewTwo = () => {
    return (
      <div className="card">
        <SugarBolusChart data={sugarBolusData} />
        <Button variant="outlined" onClick={startViewOne}>
          Back{" "}
        </Button>
      </div>
    );
  };

  const ViewThree = () => {
    return (
      <div className="card">
        <SugarBolusChart data={sugarTestData} />
        <Button variant="outlined" onClick={startViewOne}>
          Back{" "}
        </Button>
      </div>
    );
  };

  const getView = (currentView: string) => {
    if (currentView === "view1") {
      return <ViewOne />;
    } else if (currentView === "view2") {
      return <ViewTwo />;
    } else if (currentView === "view3") {
      return <ViewThree />;
    }
  };
  return <div>{getView(currentView)};</div>;
}

export default App;
