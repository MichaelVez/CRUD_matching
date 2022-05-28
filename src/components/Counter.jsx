import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.counter);
  }
  render() {
    return <div>Counter: {this.props.counter}</div>;
  }
}
