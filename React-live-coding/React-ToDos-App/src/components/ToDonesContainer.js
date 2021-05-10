import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext';

const ToDonesContainer = () => {
  const {TODONES,dispatch} =useContext(MyContext)
  
  const toDoNesItems = TODONES.map(el => {
    return (
      <div className="todones-item" key={el.id}>
        <p>{el.text}</p>
        <div className="actions">
          <button className="btn" onClick={()=>dispatch({type:"deleteitem",payload: el.id})}>&#9850;</button>
          <button className="btn" onClick={()=>dispatch({type:"updateitem",payload:el.id})}>&#8635;</button>
        </div>
      </div>
    );
  });

  return (
    <div className="todones-container">
      <h3>BACKLOG</h3>
      {TODONES.length > 0 && toDoNesItems}
    </div>
  );
};

export default ToDonesContainer;
