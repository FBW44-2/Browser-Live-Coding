
import React, { Component } from 'react'
import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'
import Contact from './components/Contact'

export default class App extends Component {
  state={
    page:"home"
  }

  render() {
    return (
      <div>
        <ul>
          <li onClick={()=>this.setState({page:"home"})}><a href="/">Home</a></li>
          <li onClick={()=>this.setState({page:"about"})}><a href="/about">About</a></li>
          <li onClick={()=>this.setState({page:"users"})}><a href="/users">Users</a></li>
          <li onClick={()=>this.setState({page:"contact"})}><a href="/contact">Contact</a></li>
        </ul>
        {this.state.page==="home" && <Home/>}
        {this.state.page==="about" && <About/>}
        {this.state.page==="users" && <Users/>}
        {this.state.page==="contact" && <Contact/>}




      </div>
    )
  }
}
