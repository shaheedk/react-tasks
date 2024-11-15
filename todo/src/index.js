import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DdRoute from "./Router/DdRoute";
import Dorout from "./Router/Dorout";
import { BrowserRouter as Router } from "react-router-dom";
// import MainApp from "./tasks/Router/MainApp";

import reportWebVitals from "./reportWebVitals";
import Fireb from "./firebase/Fireb";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import App from "./App";
// import TodoList from "./component/TodoList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Fireb />

      {/* <TodoList/> */}
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
