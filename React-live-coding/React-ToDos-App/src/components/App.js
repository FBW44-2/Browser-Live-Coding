import React, { useState } from "react";
import "../css/App.scss";
import Navigation from "./Navigation";
import ToDosContainer from "./ToDosContainer";
import ToDonesContainer from "./ToDonesContainer";
import { v4 as uuid } from 'uuid';

const App = () => {

  const [tasks, setTasks] = useState([
    {id:uuid(), text: "Make a website", done: true },
    {id:uuid(), text: "Make a website", done: true },
    {id:uuid(), text: "Pay the rent", done: true },
    {id:uuid(), text: "Call my mom", done: true },
    {id:uuid(), text: "Walk the dog", done: false },
    {id:uuid(), text: "Finish reading my book", done: true },
    {id:uuid(), text: "Make more moneys", done: true },
    {id:uuid(), text: "Make so moneys", done: false },
    {id:uuid(), text: "Wash my face!", done: false }
  ]);


  const AddItem=(text)=>{
    let task = {id:uuid() , text : text, done:false}
    setTasks( [ task,  ...tasks] )
  }

  const UpdateItem=(id)=>{
 /*    let updatedTasks = tasks.map(task=>{
      if(task.id===id){
        task.done = !task.done
        return task;
      }  let updatedTasks = tasks.map(task=>{
      if(task.id===id){
        task.done = !task.done
        return task;
      }
      return task;
    }) 
      return task;
    })  */
  /*   let updatedTasks = tasks.map(item=>item.id===id ? {...item,done:!item.done}:item)
    setTasks(updatedTasks) */

    setTasks(tasks.map(item=>item.id===id ? {...item,done:!item.done}:item) )

  }


  const TODOS = tasks.filter(item=>!item.done)
  const TODONES = tasks.filter(item=>item.done)

  return (
    <div className="app">
      <Navigation></Navigation>
      <ToDosContainer UpdateItem={UpdateItem}  AddItem={AddItem} TODOS= {TODOS} ></ToDosContainer>
      <ToDonesContainer UpdateItem={UpdateItem} TODONES={TODONES} ></ToDonesContainer>
    </div>
  );
};

export default App;
