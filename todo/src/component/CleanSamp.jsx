import React, {useEffect, useState} from 'react'

function CleanSamp() {
    const [value, setValue] = useState(0);
    const [boom,setBoom]=useState(false)

useEffect(()=>{
  const id= setBoom(false)
    setTimeout(()=>{
      setBoom(true) 
    },value*1000)
    return ()=> clearTimeout(id);
},[value]); 
 
  return (
    
    <div>
          <div className="usage">
      <div className="usage-item">
      <h1 ><label>{value}</label></h1> 
        <button onClick={() => setValue(value + 1)}>
          Increment
        </button>

        <button onClick={() => setValue(value - 1)}>
          Decrement
        </button>
      </div>

      <div className="boom">
      {
        boom && value? (
            <div className='boom'>
                <h1>Boom</h1>
                </div>):null
       
    }
      </div>
    </div>

    </div>
    
  )
}

export default CleanSamp
