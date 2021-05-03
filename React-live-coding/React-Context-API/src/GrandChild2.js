import React, { Component } from "react";
import { MyContext } from "./Context/MyContext";

export default class GrandChild2 extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {(context) => {
          return (
            <div>
              <h4>Second GrandChild in App</h4>
              <h4>Count Value in Second Child is : {context.count} </h4>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}
