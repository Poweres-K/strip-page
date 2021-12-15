import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { WrapProvider } from "./context";

ReactDOM.render(
  <WrapProvider>
    <App />
  </WrapProvider>,
  document.getElementById("root")
);
