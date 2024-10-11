import React, { Component } from 'react'


export default class Todo extends Component {


  render() {
    return (
      <div>
        <h1>hello</h1>
        
        <h2>{this.props.string}</h2>
      </div>
    )
  }
}
