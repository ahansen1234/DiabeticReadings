import PumpImage from "../images/img-insulin-pump.png";
import MeterImage from "../images/meter_image.png";
import CGMImage from "../images/cgm-image.png";
import "../App.css";

export const DevicesDisplay = () => {
  return (
    <div className="float-outer">
      <div className="float-container">
        <div className="float-child">
          <h1 className="titleText">
            Insulin Pumps
            <img
              className="image-holder"
              src={PumpImage}
              alt="MiniMed Insulin Pump"
            />
          </h1>
          I personally use the MiniMed Insulin Pump pictured here. Insulin Pumps
          are useful because they are attached to the body using an under the
          skin canula which is worn at all times, allowing the user to
          administer insulin whenever needed. The pump actually administers a
          small amount of insulin continuously throughout the day to keep blood
          glucose levels in range. It also allows for the user to enter current
          blood glucose levels and total carbohydrtes being ingested to
          calculate the necessary levels of insulin, which are then injected.
        </div>
        <div className="float-child">
          <h1 className="titleText">
            Blood Glucose Meter
            <img
              className="image-holder"
              src={MeterImage}
              alt="MiniMed Blood Glucose Meter"
            />
          </h1>
          Blood Glucose Meters are essential to Diabetics because they allow the
          user to test and monitor blood glucose levels. The test is performed
          by pricking the skin with a small needle, and applying the drawn blood
          to a test strip inserted into the meter. Many modern Blood Glucose
          Meters come with the ability to automatically transmit the reading to
          the user's paired insulin pump, allowing for easy usage of the reading
          in using the pump to administer insulin.
        </div>
      </div>
      <div className="float-container">
        <div className="float-child">
          <h1 className="titleText">
            Continuous Glucose Monitor
            <img
              className="image-holder"
              src={CGMImage}
              alt="MiniMed Blood Glucose Meter"
            />
          </h1>
          Continuous Glucose Monitors are a new and emerginf technology which is
          comprised of a sensor, also worn on the body, which constantly
          measures blood glucose levels through a canula inserted under the
          skin. Continuous Glucose Monitors (CGMs) send these readings to the
          user's insulin pump, allowing for 24hr monitoring of blood glucose
          levels. Newer CGMs are actually advanced enough to largely due away
          with finger pricks to measure blood glucose levels in tandem with
          Blood Glucose Meters
        </div>
      </div>
    </div>
  );
};

export default DevicesDisplay;
