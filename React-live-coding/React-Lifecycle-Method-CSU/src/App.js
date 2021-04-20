import React, { Component } from "react";
import Counter from "./Counter";

export default class App extends Component {
  state = {
    counter: 0,
  };

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  //updating Phase
  shouldComponentUpdate(nextprops, updatedstate) {
    console.log(updatedstate);
    if (updatedstate.counter < 6 || updatedstate.counter > 10) {
      return true;
    }
    return false;
  }

  render() {
    console.log("render from App");
    return (
      <div>
        <Counter counter={this.state.counter} />
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}
