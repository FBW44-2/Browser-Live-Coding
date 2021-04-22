import React, { Component } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import Contact from "./components/Contact";
import { NavLink, Route, Switch } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import "./App.css"

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
          <li /* onClick={() => this.setState({ page: "home" })} */>
            <NavLink activeClassName="active" exact to="/">Home</NavLink>
          </li>
          <li /* onClick={() => this.setState({ page: "about" })} */>
            <NavLink activeClassName="active" to="/about">About</NavLink>
          </li>
          <li /* onClick={() => this.setState({ page: "users" })} */>
            <NavLink activeClassName="active" to="/users">Users</NavLink>
          </li>
          <li /* onClick={() => this.setState({ page: "contact" })} */>
            <NavLink activeClassName="active" to="/contact">Contact</NavLink>
          </li>
        </ul>
        {/*   <Route exact path="/" component={Home} /> */}
        {/*  <Route exact path="/" render={()=><Home/>} /> */}

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/*     <Route path="/about" component={About} /> */}
          <Route path="/about">  
            <About />
          </Route>

          <Route path="/users" component={Users} />
          <Route path="/contact" component={Contact} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}
