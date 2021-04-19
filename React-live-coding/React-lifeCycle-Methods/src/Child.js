import React, { Component } from 'react'

export default class Child extends Component {
    constructor(){
        //react calls constrcutor only once as well
        //to initialize state
        //to bind this keyword with your custom method
        super()
        this.state={}
     
        console.log("Contructor in CHILD")
      }

      static getDerivedStateFromProps(props,state){
        console.log("getStateDerivedFromProps in CHILD")
        //required
      
        return null
        //static method you dont have access to this keyword
        //you can you this method as a filter
        //you can use it to reset your state value
      }

      componentDidMount(){
        //onload
        //this is a best place to use APIs
        /* this.setState({data:result}) */
        console.log("ComponentDidMount in CHILD")
      }

    render() {
        console.log("Render in CHILD")
        return (
            <div>
                <h1>Child Component</h1>
               
            </div>
        )
    }
}
