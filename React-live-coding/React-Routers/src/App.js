import React, { Component } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import Contact from "./components/Contact";
import { Link, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        {/*   <ul>
          <li onClick={()=>this.setState({page:"home"})}><a href="/">Home</a></li>
          <li onClick={()=>this.setState({page:"about"})}><a href="/about">About</a></li>
          <li onClick={()=>this.setState({page:"users"})}><a href="/users">Users</a></li>
          <li onClick={()=>this.setState({page:"contact"})}><a href="/contact">Contact</a></li>
        </ul>
        {this.state.page==="home" && <Home/>}
        {this.state.page==="about" && <About/>}
        {this.state.page==="users" && <Users/>}
        {this.state.page==="contact" && <Contact/>} */}

        <ul>
          <li onClick={() => this.setState({ page: "home" })}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => this.setState({ page: "about" })}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={() => this.setState({ page: "users" })}>
            <Link to="/users">Users</Link>
          </li>
          <li onClick={() => this.setState({ page: "contact" })}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        {/*   <Route exact path="/" component={Home} /> */}
       {/*  <Route exact path="/" render={()=><Home/>} /> */}

          <Route exact path="/">
            <Home/>
          </Route>


      {/*     <Route path="/about" component={About} /> */}
          <Route path="/about">
            <About/>
          </Route>


          <Route path="/users" component={Users} />
          <Route path="/contact" component={Contact} />


      </div>
    );
  }
}
