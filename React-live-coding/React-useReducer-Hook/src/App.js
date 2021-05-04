import React, { useReducer, useState, useRef } from "react";
import {Reducer} from "./Reducer/Reducer"

const initialState = {
  toDos: [],
  counter: 0,
};

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);

  // useReducer Hook (combination of states and methods)
  //  Reducer Function (universal Method)
  //dispatch is a method which you will use to send instructions to Reducer function
  //dispatch Actions
  //Actions(instruction, {type, payload})
  const task = useRef();
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Counter: {state.counter}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <input type="text" ref={task} />
      <button
        onClick={() =>
          dispatch({ type: "addnewtask", value: task.current.value })
        }
      >
        Add task
      </button>

      <div>
        <ul>
          {state.toDos.map((task) => {
            return <li key={task}>{task}</li>;
          })}
        </ul>
        <div></div>
      </div>
    </div>
  );
}

export default App;
