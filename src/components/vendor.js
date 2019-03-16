import React from "react";

function Vendor(props) {
  const { retail, wholesale, coop, damage, freight, payment } = props;
  const onChange = props.onChange;

  const costs = [
    { value: retail, name: "retail" },
    { value: wholesale, name: "wholesale" },
    { value: coop, name: "coop" },
    { value: damage, name: "damage" },
    { value: freight, name: "freight" },
    { value: payment, name: "payment" }
  ];

  const allowances = coop + damage + freight + payment;
  const allowancesPercent = allowances / 100.0;
  const deductionPercentage = (100 - allowances) / 100.0;
  const sellerRetail = (wholesale / deductionPercentage).toFixed(2);
  const netAllowances = (allowancesPercent * wholesale).toFixed(2);
  const netProceeds = (wholesale - netAllowances).toFixed(2);
  const nets = [
    `${coop} + ${damage} + ${freight} + ${payment} = ${allowances.toFixed(2)}%`,
    `${allowances.toFixed(2)}% of $${wholesale} = $${netAllowances}`,
    `$${wholesale} - $${netAllowances} = $${netProceeds}`,
    netProceeds
  ];

  return (
    <div>
      <p className="f3">Vendor:</p>
      {costs.map(function(el) {
        return (
          <p>
            <input
              type="number"
              placeholder="100.00"
              min={0}
              step={0.01}
              max={10000}
              onChange={onChange}
              {...el}
            />
          </p>
        );
      })}
      {nets.map(function(el) {
        return (
          <p>
            <input type="text" value={el} readOnly={true} disabled={true} />
          </p>
        );
      })}
    </div>
  );
}

export default Vendor;
