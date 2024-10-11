import { useReducer } from "react"

export default function CouterOne() {
    const initialState=0
  const reducer=(state,action)=>{
switch(action){
    case 'increment':
        return state+1
        case 'decrement':
            return state -1
            case "reset":
                return initialState
                default:
                return state
}
  }
const  [count,setCount]=useReducer( reducer,initialState)
  return (

    <div>
        <div>Count :{count}</div>
      <button onClick={()=>setCount('increment')} >Increment</button>
      <button onClick={()=>setCount('decrement')} >Dicriment</button>
      <button onClick={()=>setCount('reset')} >Reset</button>
    </div>
  )
}
