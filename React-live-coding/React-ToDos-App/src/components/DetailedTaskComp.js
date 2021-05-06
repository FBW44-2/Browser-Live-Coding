import React from "react";
import { useParams } from "react-router-dom";

export default function DetailedTaskComp({data}) {

console.log(data)
    const {text}=useParams()
    console.log(text)

    let searchTask= data.find(item=>item.text===text)
    console.log(searchTask, "search item")
  return (
    <div>
      <h1>Task : {searchTask && searchTask.text}</h1>
      <p>Status : {searchTask && searchTask.done.toString()}</p>
    </div>
  );
}
