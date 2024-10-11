import {useState} from 'react'

export default function SampCostomHooks(initialValue) {

 const [value,Setvalue]=useState(initialValue)
  return[
    value,
(event)=>{
    Setvalue({
        ...value,
        [event.target.name]:event.target.value,
    })
}
  ]
}
