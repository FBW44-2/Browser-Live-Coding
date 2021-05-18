/* 
import React,{useEffect, useRef, useState} from 'react';
import Child from "./Child"

function App() {
  
  const child= useRef()

  useEffect(()=>{
    child.current.value="anything"
    console.dir(child.current)
  },[])
  return (
    <div className="App">
      <h1>My React App</h1>
      <Child ref={child}/>
      <button onClick={()=>child.current.ChildCounterIncrement()}>increment</button>

    </div>
  );
}


export default App; */


//useDebugValue
import React from 'react'
import useDelayMessage from "./useDelayMessage"

export default function App() {
  const message = useDelayMessage()
  return (
    <div>
      <h2>{message}</h2>
    </div>
  )
}
