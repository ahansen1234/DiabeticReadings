import "./App.css";
import DataDislay from "./components/DataDisplay";
import InfoDisplay from "./components/InfoDisplay";
import DevicesDisplay from "./components/DevicesDisplay";
import { useState } from "react";

function App() {
  const [currentView, setCurrentView] = useState("infoView");
  const setInfoView = () => {
    setCurrentView("infoView");
  };
  const setDataView = () => {
    setCurrentView("dataView");
  };
  const setDevicesView = () => {
    setCurrentView("devicesView");
  };
  const InfoView = () => {
    return <InfoDisplay />;
  };
  const DevicesView = () => {
    return <DevicesDisplay />;
  };

  const DataView = () => {
    return <DataDislay />;
  };
  const getView = (currentView: string) => {
    if (currentView === "infoView") {
      return <InfoView />;
    } else if (currentView === "dataView") {
      return <DataView />;
    } else if (currentView === "devicesView") {
      return <DevicesView />;
    }
  };

  return (
    <div className="mainScreen">
      <div className="btn-group">
        <button onClick={setDevicesView}>Devices</button>

        <button onClick={setDataView}>Your Data</button>

        <button onClick={setInfoView}>Info</button>
      </div>
      {getView(currentView)}
    </div>
  );
}

export default App;
