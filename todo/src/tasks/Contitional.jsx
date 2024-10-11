import React from 'react'


export default function Contitional() {
    const [logged,setLogged]=React.useState(true)
    if(logged){
        return (
            <div>
             
              <h1>Contitional Rendering</h1>
            </div>
          )
    }else{
        return (
            <div>
             
              <h1>Else Rendering</h1>
            </div>
          ) 
    }
 
}
