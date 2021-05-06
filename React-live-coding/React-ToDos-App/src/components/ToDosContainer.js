import React, { useRef ,useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {MyContext} from "../context/MyContext"

const ToDosContainer = () => {
  const {TODOS, UpdateItem, AddItem }= useContext(MyContext)

  const toDoItems = TODOS.map(el => {
    return (
      <div className="todo-item" key={el.id}>
        {/* <p><Link to={ {pathname:`/task/${el.text}`, state:el} }>     {el.text}</Link> </p> */}
        <p><Link to={`/task/${el.text}` }>     {el.text}</Link> </p>
        <div className="actions">
          <button className="btn" onClick={()=>UpdateItem(el.id)}>&#10004;</button>
        </div>
      </div>
    );
  });


const input = useRef()

const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(input.current.value)
  setDisabled(true)

  AddItem(input.current.value)
  /* e.target.reset() */
  input.current.value=""
  setTimeout(()=>{setDisabled(false)},2000)
  
}
const [disabled,setDisabled]=useState(false)


  return (
    <div className="todos-container">
      <form className="todo-form" onSubmit={handleSubmit}>
        <label className="input-item">
          <input type="text" name="todo" ref={input}  />
        </label>
        <input disabled={disabled} className="btn" type="submit" value="ADD" />
      </form>
      <div className="todos">
        <h3>TO DO</h3>
        {TODOS.length > 0 && toDoItems}
      </div>
    </div>
  );
};

export default ToDosContainer;
