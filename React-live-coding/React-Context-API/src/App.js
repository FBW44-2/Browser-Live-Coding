import React, { createContext, useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

export const MyContext = createContext(null); //container with null value inside it

console.log(MyContext);

function App() {
const [count,setCount]=useState(0)
const [users,setUsers]=useState([])

let context = {count,setCount,users,setUsers}

  return (
    <MyContext.Provider value={context}>
      <div className="App">
        <h1>Context API</h1>
        <Child1 />
        <Child2 />
      </div>
    </MyContext.Provider>
  );
}

export default App;
