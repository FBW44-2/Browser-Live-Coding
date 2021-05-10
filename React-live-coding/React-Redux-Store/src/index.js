import React from "react";
import App from "./App.js";
import reactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState={
    name:"john",
    age:23
}
const Reducer = (state=initialState, action) => {
    console.log(action)
  
    switch(action.type){
        case "increment":
            return {...state,age:state.age+1 }
        default:
            return state
    }

};

const myStore = createStore(Reducer);

reactDOM.render(
  <Provider store = {myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
