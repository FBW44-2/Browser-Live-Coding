import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function GrandChild(props) {
  console.log(props);
  /*  const name = useSelector(state=>state.name)
    const age = useSelector(state=>state.age) */
  const { name, age } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>This is our GrandChild Component of App inside Child</h2>
      <h2>hi,{name}</h2>
      <h3>Your age is : {age}</h3>
      <button onClick={() => dispatch({ type: "increment" })}>
        increment age{" "}
      </button>
    </div>
  );
}
