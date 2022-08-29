import "./App.css";
import rupees from "./utils/images/1.png";
import union from "./utils/images/Union.png";
import flag from "./utils/images/flag.png";
import rzpLogo from "./utils/images/RZPlogo.png";
import mastercard from "./utils/images/mastercard.png";
import visa from "./utils/images/visa.png";
import UPI from "./utils/images/UPI.png";
import Rupay from "./utils/images/Rupay.png";
import pci from "./utils/images/pci.png";
import whiteFlag from "./utils/images/flagwhite.png";
import rzpLogowhite from "./utils/images/rzplogowhite.png";
import { useState } from "react";
function App() {
  const [value, setValue] = useState(null);
  const checkValue = () => {
    if (value) return true;
    return false;
  };
  const onlyNumbersAreValid = (e) => {
    if (!isNaN(e.target.value)) {
      console.log(e.target.value);
      setValue(e.target.value);
    }
  };
  return (
    <div className="App">
      <div className="top-box">
        <div className="top-text-box">G</div>
      </div>
      <div className="form-bottom-boxes">
        <div className="form-box">
          <div className="form-text">
            <div className="form-text-top">paying</div>
            <div className="form-text-middle">Geolife agritech pvt ltd</div>
            <div className="form-text-bottom">rzp.pay/geolifeagritech</div>
          </div>
          <div className="form-amount">
            <div className="form-amount-top">
              <img
                className="form-amount-top-image"
                src={rupees}
                alt="rupee icon"
              ></img>
              <div className="input-div">
                <input
                  className="form-amount-top-rupees"
                  placeholder="0"
                  onChange={(e) => {
                    onlyNumbersAreValid(e);
                  }}
                  value={value}
                />
              </div>
            </div>

            <input
              className="form-amount-bottom"
              placeholder="Comments (if any)"
            ></input>
          </div>
          <div className="form-submit">
            <button
              className={`form-submit-button ${
                value ? "enabled-button" : "disabled-button"
              }`}
              disabled={() => {
                checkValue();
              }}
            >
              Pay ₹{value || 0}
            </button>
            {!value && (
              <div className="form-submit-bottom-message">
                <img className="union-icon" src={union}></img>
                <div className="form-submit-warning-message">
                  This link is not activated for payments yet
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="bottom-box">
          <div className="bottom-box-top">
            <img src={rzpLogo} className="rzp-logo rzp-logo-common"></img>
            <img
              src={rzpLogowhite}
              className="rzp-logo-white rzp-logo-common"
            ></img>
            <div className="flag-logo-div">
              <img className="flag-logo flag-logo-common" src={flag}></img>
              <img
                className="flag-logo-white flag-logo-common"
                src={whiteFlag}
              ></img>
              <div className="flag-logo-text">
                <a href="#">Report Page</a>
              </div>
            </div>
          </div>
          <div className="bottom-box-middle">
            Want to accept online payments for your business? Visit{" "}
            <a href="#">razorpay.com </a>
            to get started!
          </div>
          <div className="bottom-box-bottom">
            <img className="bottom-box-logo" src={UPI}></img>
            <img className="bottom-box-logo" src={visa}></img>
            <img src={mastercard} className="bottom-box-logo"></img>
            <img src={Rupay} className="bottom-box-logo"></img>
            <img src={pci} className="bottom-box-logo-pci"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
