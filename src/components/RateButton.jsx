import React, { Component } from "react";

export default class RateButton extends Component {
  render() {
    return <button onClick={this.props.func}>{this.props.text}</button>;
  }
}
