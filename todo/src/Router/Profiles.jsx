import React from "react";

import One from "./One";
function Profiles(props) {
  return (
    <div>
      <h1>profiles</h1>
      <One data={props.data} />
    </div>
  );
}

export default Profiles;
