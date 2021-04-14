import React from "react";

/* document.querySelector("button").addEventListener("click",()=>{}) webAPI */




class App extends React.Component {
  constructor(){
    super()
      this.state = {
    counter: 0,
    name:"Naqvi",
  };
  
  }
  increment = () => {
    /*  this.state.counter++; */
    this.setState({
      counter: this.state.counter + 1,
      name: "Joseph",
    }); //asychronously

    console.log(this.state.counter);
  };

  render() {
    console.log("render method in App");
    return (
      <div className="App">
        <h1>My React App</h1>
        <h2>Counter = {this.state.counter}</h2>
        <h2>Name: {this.state.name}</h2>

        <button onClick={this.increment}>click me</button>
      </div>
    );
  }
}

/* function App() {

  const printSomething=()=>{
    counter++;
    console.log(counter)
  }

  let counter= 0;
  return (
    <div className="App">
      <h1>My React App</h1>
  <h2>Counter = {counter}</h2>

      <button onClick= {printSomething} >click me</button>
    </div>
  );
}
 */

export default App;
