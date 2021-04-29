
import React, { useEffect, useRef , createRef } from 'react';

/* const App=()=>{
  const track = useRef() //reference or tag 

  return (
    <div className="App">
    <h1> My React App </h1>
    <input ref={track} type="text"/>
    <button onClick={()=>console.log(track.current.value)}>Show Value</button>
  </div>
  )
} */


class App extends React.Component {


constructor(props) {
  super(props)
  this.track = createRef()
}




  render(){
    console.log("render")
     return (
    <div className="App">
      <h1> My React App </h1>
      <input ref={this.track} type="text"/>
      <button onClick={()=>console.log(this.track.current.value)}>Show Value</button>


    </div>
  );
  }
 
}


export default App;