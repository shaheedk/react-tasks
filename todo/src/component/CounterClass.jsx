import React, { Component } from "react";

class CounterClass extends Component{
state={
    counter:0
}
    onIncrement=()=>{
        this.setState({
            counter:this.state.counter+1
        })
    }
    onDecrement=()=>{
        this.setState({
            counter:this.state.counter-1
        })
    }


    render(){
        return(
        <div className="Counter">
         <h1>Counter Component</h1>
         <h3 >{this.state.counter}</h3>
          <button onClick={this.onIncrement}>+</button>
          <button onClick={this.onDecrement}>-</button>
        </div>
        )
    }
}
export default CounterClass;