import React, { useLayoutEffect, useRef, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const heading = useRef()
  useLayoutEffect(() => {
    console.log("useEffect");
      heading.current.style.position="relative"
      heading.current.style.top="200px"
       heading.current.style.backgroundColor="green"
   
  },[]);

  return (
    <div className="App">
      {console.log("jsx")}
      <h1 ref={heading}>My React App</h1>
      <h2>counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
    </div>
  );
}

export default App;
