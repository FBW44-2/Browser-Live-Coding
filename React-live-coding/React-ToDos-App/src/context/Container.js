import React, { useEffect, useReducer } from "react";
import { MyContext } from "./MyContext";
import {Reducer} from "./Reducer"


const initialState = {
  tasks: [],
};

export default function Container(props) {
  /*  console.log(useReducer(Reducer, initialState)) */
  const [{tasks}, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    //componentDIDMount
    let data = localStorage.getItem("todoItems");

    if (data) {
      let parsedData = JSON.parse(data);
      dispatch({type:"load",payload:parsedData})
    }
  }, []);

  const TODOS = tasks.filter((item) => !item.done);
  const TODONES = tasks.filter((item) => item.done);


  return (
    <MyContext.Provider value={{ tasks, TODOS, TODONES, dispatch }}>
      {props.children}
    </MyContext.Provider>
  );
}
