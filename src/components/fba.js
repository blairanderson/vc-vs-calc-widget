import React from "react";
import { FeeCalc } from "amazon-fba-calc";

const feeCalculator = new FeeCalc();
const feesByDim = {};
const inputStyles = {
  display: "inline",
  width: "65px"
};

function FBA(props) {
  const [length, setLength] = React.useState(4.8);
  const [width, setWidth] = React.useState(0.9);
  const [height, setHeight] = React.useState(0.8);
  const dimensions = [length, width, height];
  const [weightInLbs, setWeight] = React.useState(1.5);
  const [data, setData] = React.useState("");
  const dimKey = [[length, width, height].join(","), weightInLbs].join(".");

  React.useEffect(() => {
    if (feesByDim[dimKey]) {
      setData(feesByDim[dimKey]);
    } else {
      feeCalculator.calculateFBAFee(dimensions, weightInLbs).then(fee => {
        feesByDim[dimKey] = fee;
        setData(fee);
      });
    }
  });

  return (
    <div>
      <p className="f3">Seller w/ Your Fulfillment</p>
      <div className="cf">
        <input
          type="number"
          value={length}
          style={inputStyles}
          onChange={e => setLength(parseFloat(e.target.value))}
        />
        {" x "}
        <input
          type="number"
          value={width}
          style={inputStyles}
          onChange={e => setWidth(parseFloat(e.target.value))}
        />
        {" x "}
        <input
          type="number"
          value={height}
          style={inputStyles}
          onChange={e => setHeight(parseFloat(e.target.value))}
        />
      </div>
      <input
        type="number"
        value={weightInLbs}
        className="db w-100"
        onChange={e => setWeight(parseFloat(e.target.value))}
      />
      <p>${data}</p>
    </div>
  );
}

export default FBA;
