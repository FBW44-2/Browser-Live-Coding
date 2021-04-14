import React from "react";
import GreetUser from "./Greet";
import Article from "./Article";

function App() {
  /* let allStudents=["john","David","Misbah"] */

  let articlesData = [{ heading: "Declarative", para1: "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.", para2: "Declarative views make your code more predictable and easier to debug. " },
  { heading: "Component-Based", para1: "Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.",para2:"Build encapsulated components that manage their own state, then compose them to make complex UIs." },
];
  return (
    <div className="App" id="heading">
      <h1>My React App</h1>
      <div style={{display:"flex"}}>
      {articlesData.map(article=>{
        return(
          <Article data= {article}/>
        )
      })}
      </div>
      {/*   {allStudents.map(student=>{
        return(
          <GreetUser name={student}/>
        )
      })} */}

      {/*  <GreetUser name="John" age={23}/>
      <GreetUser name="Ali"/>
      <GreetUser name="Misbah"/> */}

      {/*  {GreetUser({name:"John"})}
      {GreetUser({name:"Naqvi"})} */}
    </div>
  );
}

export default App;
