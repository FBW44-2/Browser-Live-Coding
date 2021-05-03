import React, { useContext } from "react";
import GrandChild2 from "./GrandChild2";
import { MyContext } from "./App";

export default function Child2() {
    const {count,setCount} = useContext(MyContext)
  return (
    <div>
      <h2>Second Child in App</h2>
      <h2>Count value : {count} </h2>
      <button onClick={()=>setCount(count+1)}>increment</button>
      <GrandChild2 />
    </div>
  );
}
