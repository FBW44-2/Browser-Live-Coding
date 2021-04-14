
import React from 'react';
import GreetUser from './Greet';


function App() {
  let allStudents=["john","David","Misbah"]
  return (
    <div className="App" id="heading">
      <h1>My React App</h1>
      {allStudents.map(student=>{
        return(
          <GreetUser name={student}/>
        )
      })}
      
     {/*  <GreetUser name="John" age={23}/>
      <GreetUser name="Ali"/>
      <GreetUser name="Misbah"/> */}


     {/*  {GreetUser({name:"John"})}
      {GreetUser({name:"Naqvi"})} */}

    </div>
  );
}


export default App;