import React, {  useState } from 'react'

function HookCounterTwo() {
    const initialCount=0;
    const [count,setCount]=useState (initialCount)
    const incrementFive =()=>{
      for(let i=1;i<=5;i++){
 setCount(prevCount=>prevCount+1) //the prevCount represent the count ,the +1 is use for how much time increment
      }
    }
  return (
    <div>
  <h4>  Count :{count}</h4>
      <button onClick={()=>setCount(initialCount)}>Reset</button><br /><br />
      <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button><br /><br />
      <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button><br /><br />
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}

export default HookCounterTwo
