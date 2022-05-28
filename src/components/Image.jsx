import React, { Component } from "react";

export default class Image extends Component {
  render() {
    return (
      <div className='img'>
        <img src={this.props.src} alt='' />
      </div>
    );
  }
}
