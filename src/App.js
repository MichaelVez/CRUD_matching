import "./App.css";
import Counter from "./components/Counter";
import RateButton from "./components/RateButton";
import Image from "./components/Image";
import React, { Component } from "react";
import { faker } from "https://cdn.skypack.dev/@faker-js/faker";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      negativeCounter: 0,
      positiveCounter: 0,
      nextImageSrc: faker.image.sports(),
    };
  }
  handleClick = (isAdd) => {
    if (isAdd)
      this.setState((prevState) => ({
        positiveCounter: prevState.positiveCounter + 1,
      }));
    else
      this.setState((prevState) => ({
        negativeCounter: prevState.negativeCounter + 1,
      }));
    this.setState({ nextImageSrc: "" });
    this.changeImage();
  };
  changeImage = () => {
    console.log("here");
    let newImg = faker.image.sports(640, 480, true);
    console.log(newImg);
    this.setState({ nextImageSrc: newImg });
  };
  render() {
    return (
      <div className='cont'>
        <div className='counters'>
          <Counter counter={this.state.negativeCounter} />
          <Counter counter={this.state.positiveCounter} />
        </div>
        <Image src={this.state.nextImageSrc} text={this.state.nextImageText} />
        <div className='buttons'>
          <RateButton func={() => this.handleClick(false)} text='HATE IT' />
          <RateButton func={() => this.handleClick(true)} text='LOVE IT' />
        </div>
      </div>
    );
  }
}
