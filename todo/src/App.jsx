import React from "react";
import CouterOne from "./component/CouterOne";
import Task3 from "./tasks/Task3";
import Contitional from "./tasks/Contitional";
import Clock from "./tasks/Clock";
import Button from "./component/Button";

const App = () => {
  return (
    <div>
      <Task3 />
      <Contitional/>
      <Clock/>
      <Button/>
    </div>
  );
};

export default App;
