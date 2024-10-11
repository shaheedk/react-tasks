// Multiple way of Fetching Events in react


import React from 'react'

export default function Button() {
    const samp=(eve)=>{
    eve.preventDefault();
        console.log("clicked",eve.target)
      
    }
  return (
    <div>
    <button onClick={samp}>first way</button>   {/*this is make a call back */} 
    <button  onClick={(event)=>samp(event)}>second way</button>  
   
    <button onClick={samp.bind(this)}>third way</button>
    <a href="#test" onClick={samp}>click this midalj bro</a>
    </div>
  )
}
