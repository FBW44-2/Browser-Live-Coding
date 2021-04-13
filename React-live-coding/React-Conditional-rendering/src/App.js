import React from "react"

function App() {
  let status=true
  return (
    <div className="App">
     <h1 style={{backgroundColor: status?"green":"red"}} >{status? "Hello world" : "Hello everyOne"}</h1>
    </div>
  );
}


export default App;
