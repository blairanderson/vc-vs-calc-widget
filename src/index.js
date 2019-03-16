import React from "react";
import ReactDOM from "react-dom";
import OLD from "./OLD.js";
import Profitability from "./Profitability.js";

import "./styles.css";

const TODOS = [
  "Basic math for FBM shipments",
  "Basic math for FBA shipments",
  "ignore FBA Calculator and allow entering the price",
  "Fix the FBA calculator"
];

function fetchSeller() {
  return fetch(
    "https://sellercentral.amazon.com/fba/profitabilitycalculator/productmatches?searchKey=B07NHFQ9NX&language=en_US&profitcalcToken=gsv9DrHRdmCcREJ2m1TD%2FSstcoQhEPEQWIj8CGkAAAAJAAAAAFyNI2pyYXcAAAAAFVfwLBerPie4v1Ep%2F%2F%2F%2F",
    {
      credentials: "include",
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "no-cache",
        pragma: "no-cache",
        "x-requested-with": "XMLHttpRequest"
      },
      referrer:
        "https://sellercentral.amazon.com/hz/fba/profitabilitycalculator/index?lang=en_US",
      referrerPolicy: "no-referrer-when-downgrade",
      body: null,
      method: "GET",
      mode: "nocors"
    }
  );
}

function App() {
  const [asin, updateAsin] = React.useState("B07NHFQ9NX");
  const asinLink = `https://sellercentral.amazon.com/fba/profitabilitycalculator/productmatches?searchKey=${asin}&language=en_US&profitcalcToken=gsv9DrHRdmCcREJ2m1TD%2FSstcoQhEPEQWIj8CGkAAAAJAAAAAFyNI2pyYXcAAAAAFVfwLBerPie4v1Ep%2F%2F%2F%2F`;

  return (
    <div>
      <div>
        <div>
          <input type="text" value={asin} />
          <small>
            Check our work:{" "}
            <a target="_blank" href={asinLink}>
              Get ASIN Dims
            </a>
          </small>
        </div>
        <ul>
          <li>
            <a href="https://sellercentral.amazon.com/gp/help/GABBX6GZPA8MSZGW?language=en_US&ref=xx_GABBX6GZPA8MSZGW_cont_201411300">
              2019 US FBA fulfillment fee changes
            </a>
          </li>
          <li>
            <a href="https://sellercentral.amazon.com/hz/fba/profitabilitycalculator/index?lang=en_US">
              FBA profitability Calculator
            </a>
          </li>
        </ul>
      </div>
      <Profitability />
      <hr />
      <ul className="list mw6 center">
        {TODOS.map(function(el) {
          return <li>{el}</li>;
        })}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
