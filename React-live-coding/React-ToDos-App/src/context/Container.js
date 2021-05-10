import React, { useEffect , useReducer} from 'react'
import { MyContext } from './MyContext'
import { v4 as uuid } from "uuid";



const Reducer=(state,action)=>{
   switch(action.instruction){
     case "additem":
       return {tasks:[...state.tasks,action.value ] }
     default: 
      return state
   }
}

const initialState={
  tasks:[]
}
export default function Container(props) {

 /*  console.log(useReducer(Reducer, initialState)) */
  const [state,dispatch] = useReducer(Reducer, initialState)




    useEffect(() => {
        //componentDIDMount
        let data = localStorage.getItem("todoItems");
    
        if (data) {
          let parsedData = JSON.parse(data);
          setTasks(parsedData);
        }
      }, []);


      const TODOS = tasks.filter((item) => !item.done);
      const TODONES = tasks.filter((item) => item.done);


      const AddItem = (text) => {
        let task = { id: uuid(), text: text, done: false };
        localStorage.setItem("todoItems", JSON.stringify([task, ...tasks]));
        setTasks([task, ...tasks]);
      };
    
      const UpdateItem = (id) => {
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
        let updatedTasks = tasks.map((item) =>
          item.id === id ? { ...item, done: !item.done } : item
        );
        localStorage.setItem("todoItems", JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
    
        /*    setTasks(tasks.map(item=>item.id===id ? {...item,done:!item.done}:item) ) */
      };
    
      const DeleteItem = (id) => {
        let updatedItems = tasks.filter((item) => item.id !== id);
        localStorage.setItem("todoItems", JSON.stringify(updatedItems));
        setTasks(updatedItems);
      };
    
    

    return (
       <MyContext.Provider value={{tasks,setTasks,TODOS,TODONES, dispatch}}>
            {props.children}
       </MyContext.Provider>
    )
}


