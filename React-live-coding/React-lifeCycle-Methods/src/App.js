
import React, { Component } from 'react'
import Child from './Child'

export default class App extends Component {
  constructor(){
    //react calls constrcutor only once as well
    //to initialize state
    //to bind this keyword with your custom method
    super()
    this.state={
      name:"Ali",
     /*  user:this.fetchUser() */
     }
    /*  this.fetchUser = this.fetchUser.bind(this) */
    console.log("Contructor in APP")
  }



 //custom  method
/* fetchUser=()=>{
  fetch("https://reqres.in/api/users?page=2")
  .then(res=>res.json())
  .then(result=>this.setState({user:result.data[0]}))
} */
//Hoisting

static getDerivedStateFromProps(props,state){
  console.log("getStateDerivedFromProps in APP")
  //required

  return null
  //static method you dont have access to this keyword
  //you can you this method as a filter
  //you can use it to reset your state value
}


//this method will execute only once in complete life cycle of react comp.
componentDidMount(){
  //onload
  //this is a best place to use APIs
  /* this.setState({data:result}) */
  console.log("ComponentDidMount in APP")
}

//required method in class comp
  render() {
    console.log("Render From APP")
    return (
      <div>
        <h1>hi , {this.state.name}</h1>
        <Child/>
      </div>
    )
  }
}



//constructor --once in mounting
//componentDidMount --once just after mounting


//static getDerivedStateFromProps --- mounting and updating
//render --- mounting and updating

