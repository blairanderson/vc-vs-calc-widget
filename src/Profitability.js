import React from "react";
import Vendor from "./components/vendor.js";
import FBAFBM from "./components/fbafbmRadio.js";
import FBA from "./components/fba.js";
import FBM from "./components/fbm.js";

function Profitability() {
  const [selectedOption, updateSelected] = React.useState("FBM");
  const [retail, setRetail] = React.useState(26.99);
  const [wholesale, setWholesale] = React.useState(11.23);
  const [coop, setCoop] = React.useState(10.7);
  const [damage, setDamage] = React.useState(2.0);
  const [freight, setFreight] = React.useState(2.0);
  const [payment, setPaymentTerms] = React.useState(2.0);
  function onChange(e) {
    console.log(e.target.name, e.target.value);
    return {
      retail: setRetail,
      wholesale: setWholesale,
      coop: setCoop,
      damage: setDamage,
      payment: setPaymentTerms,
      freight: setFreight
    }[e.target.name](parseFloat(e.target.value));
  }

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
          <Vendor
            onChange={onChange}
            {...{ retail, wholesale, coop, damage, freight, payment }}
          />
        </div>
        {selectedOption == "FBA" && (
          <div className="fl w-50">
            <FBA />
          </div>
        )}
        {selectedOption == "FBM" && (
          <div className="fl w-50">
            <FBM />
          </div>
        )}
        {selectedOption != "FBA" && selectedOption != "FBM" && (
          <div style={{ backgroundColor: "red" }}>Big Problem Folks</div>
        )}
      </div>
    </div>
  );
}

export default Profitability;
