import React from "react";
import FBAFBM from "./components/fbafbm.js";
import FBA from "./components/fba.js";
import FBM from "./components/fbm.js";

function Profitability() {
  const [selectedOption, updateSelected] = React.useState("FBM");
  return (
    <div>
      <FBAFBM {...{ selectedOption, updateSelected }} />
      <div className="cf w-100">
        <div className="fl w-25">
          <p className="f3">Revenue</p>
          <p>Item Price</p>
          <p>Shipping</p>
          <p>Total Revenue</p>
          <p>Selling on Amazon Fees</p>
        </div>
        <div className="fl w-25">
          <p className="f3">Vendor</p>
          <p>
            <input type="number" min={0} step={0.01} max={1000} />
          </p>
        </div>
        {selectedOption == "FBM" && (
          <div className="fl w-50">
            <FBA />
          </div>
        )}
        {selectedOption == "FBA" && (
          <div className="fl w-50">
            <FBM />
          </div>
        )}
      </div>
    </div>
  );
}

export default Profitability;
