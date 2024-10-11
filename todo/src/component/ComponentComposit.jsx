import React from 'react';


function ComponentComposit() {
  return (
    <div>
      <div className="green ">
        <div className="red">
          <h1>Top Box</h1>
          <p>some text in text box</p>
        </div>
      </div>
      <div className="green">
        <div className="red">
          <h3>Button Box</h3>
          <p>some text in button box</p>
        </div>
      </div>
    </div>
  );
}

export default ComponentComposit;