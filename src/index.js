import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Circle from "./Circle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Circle color = 'green'/> */}
    <Circle top="5%" left="73%" color="yellow" />
    <Circle top="25%" left="15%" color="#527853" />
    {/* <Circle top="70%" left="73%" color="red" /> */}
    <Circle top="50%" left="50%" color="#A8DF8E" />
    <Circle top="70%" left="23%" color="#EE7214" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
