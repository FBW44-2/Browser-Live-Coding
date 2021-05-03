import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Container from "./Context/Container"

function App() {
  return (
    <Container>
      <div className="App">
        <h1>Context API</h1>
        <Child1></Child1>
        <Child2></Child2>
      </div>
      {/*  <User user={"Naqvi"}>
     <NestedComponent count={count}> hello </NestedComponent>
  
    </User> */}
    </Container>
  );
}

export default App;
