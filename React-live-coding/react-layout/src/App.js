import React from "react"
import "./App.css"
import Header from "./Header"
import Article from "./Article"

class App extends React.Component{  
  render(){
    let name = "David"
/*     let color="green"
    let styling={backgroundColor:color,color:"white"} */
  /*   let items=[<li key="1">A</li>, <li key="2">B</li>, <li key="3">C</li>] */

    let items=[{name:"John"},{name:"Dravid"},{name:"Misbah"}]
  let createListItems= items.map((item,i)=>{
    return(
    <li key={i}>{item.name}</li>
    )
  })
    return(
      <div>
          <Header/>
        <h1 /* style={styling} */>Hello {name}</h1>
        <p>{createListItems}</p>
        <div >
          <Article/>
        </div>
      </div>
    )
  }
}

export default App;
