import React, { Component } from 'react'

export default class App extends Component {
constructor(props){
  super(props);
//initialized state
  this.state={
    counter:0,
    users:null
  }

//bind custom method
this.increment = this.increment.bind(this)
this.decrement = this.decrement.bind(this)
/* console.log("constructor from app") */
}


static getDerivedStateFromProps(props,state){
  console.log("getDerivedStateFromProps from app")
 /*  console.log(state,props) */

  if(state.counter===6){
     return {counter:0}
  }
  return null

}


  //custom method
  increment(){
   /*  console.log(this) */
    
    this.setState({
      counter:this.state.counter+1
    }/* ,()=>{
      if(this.state.counter===6){
        this.setState({counter:0})
      }
    } */)
  }
   //custom method
  decrement(){
    this.setState({
      counter:this.state.counter-1
    })
  }

//componentDidMount
componentDidMount(){
  console.log("ComponentDidMount from app")
  fetch("https://reqres.in/api/users?page=2")
  .then(res=>res.json())
  .then(result=>this.setState({users: result.data}))
}


  //required
  render() {
   /*  console.log("render from app component") */
    console.log(this.state.counter, "render")
    console.log(this.state.users)
    return (
      <div>
        <h1>Counter :{this.state.counter}</h1>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>

        <div>
          
       {/*  if this.state.users is true then map through it */}
          { this.state.users && this.state.users.map(user=>{
            return(
                <div key={user.id}>
                  <h2>{user.first_name} {user.last_name}</h2>
                  <img src={user.avatar} alt="" width="200" />
                </div>
            )
          }) }
        </div>
      </div>
    )
  }
}
