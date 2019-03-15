import React from "react";
import ReactDOM from "react-dom";
import OLD from "./OLD.js";
import Profitability from "./Profitability.js";

import "./styles.css";

function App() {
  return (
    <div>
      <Profitability />
      <hr />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
