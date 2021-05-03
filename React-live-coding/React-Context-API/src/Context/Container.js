import React,{useState} from "react";
import {MyContext} from "./MyContext"

//Container(use to Enhanced functionailty) VS Component (responsible for ui)
export default function Container(props) {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);


  return (
      <MyContext.Provider value={{count,setCount,users,setUsers}}>
            {props.children}
      </MyContext.Provider>
  );
}
