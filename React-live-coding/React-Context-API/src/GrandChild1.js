import React, { useContext } from "react";
import { MyContext } from "./App";

export default function GrandChild1() {
  const { count } = useContext(MyContext);
  return (
    <div>
      <h4>First GranChild in App</h4>
      <h4>Count Value in First Child is : {count}</h4>
    </div>
  );
}
