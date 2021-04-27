
import React,{useState} from 'react';
/* import "./App.scss" */

import {Header,Flex,Button,Link,Container} from "./styledComponents"
import Child from './Child';


function App() {

  const [Bg,setBG] = useState("sm")
  return (
    <Container size={Bg} > 
    <div className="App">
      <Header>My React App</Header>
      <Flex column>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
      </Flex>

      <Button primary onClick={()=>setBG("lg")} >Click me</Button>

      <Link href="#"> Testing </Link>

      <Child/>
    </div>
    </Container>
  );
}


export default App;