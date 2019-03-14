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
        <div className="fl w-third">
          <p className="f3">Revenue</p>
          <p>Item Price</p>
          <p>Shipping</p>
          <p>Total Revenue</p>
          <p>Selling on Amazon Fees</p>
        </div>
        <div className="fl w-third">
          <p className="f3">Vendor</p>
        </div>

        {selectedOption == "FBM" && (
          <div className="fl w-third">Seller w/ Your Fulfillment</div>
        )}
        {selectedOption == "FBA" && (
          <div className="fl w-third">Seller w/ Amazon Fulfillment</div>
        )}
      </div>
    </div>
  );
}

export default Profitability;
