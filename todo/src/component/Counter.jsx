import React, {  memo } from "react";

const Counter = () => {
  console.log('child component')
  return (
    <div>
      child component
    </div>
  );
};

export default memo(Counter);
