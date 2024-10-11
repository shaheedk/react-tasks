import React, { Component } from "react";

export default class Form extends Component {
  state = {
   firstName:'',
   lastName:''
  };

  onHandleChange = (event) => {

    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onSubmit = () => {
    console.log(this.state);
  };
 
  render() {
    return (
      <form >
        <h2>Form Component</h2>
        <input
          type="text"
            name="firstName"
          value={this.state.firstName}
          onChange={this.onHandleChange}
        />
        <input
          type="text"
            name="lastName"
          value={this.state.lastName}
          onChange={this.onHandleChange}
        />
        <button type="Button" onClick={this.onSubmit}>
          Submit
        </button>
      </form>
    );
  }
}
