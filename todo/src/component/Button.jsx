// Multiple way of Fetching Events in react


import React from 'react'

export default function Button() {
  const clickHandler = (evt, btnLabel) => {
  evt.preventDefault()
    console.log("I am being clicked", evt.target, btnLabel);
  };

  return (
    <div>
      {/* First Way: Passing the function directly */}
      <button onClick={clickHandler}>Click Here 1</button>

      {/* Second Way: Inline function with arguments */}
      <button onClick={(event) => clickHandler(event, "btn 2")}>
        Click Here 2
      </button>

      {/* Third Way: Using bind to pass arguments */}
      <button onClick={clickHandler.bind(this, "btn 3")}>
        Click Here 3
      </button>
    </div>
  );
}