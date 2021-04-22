import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import User from "./User";

export default class Users extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((result) => this.setState({ users: result.data }));
  }

  render() {
    return (
      <div>
        <h1>This is our Users Page</h1>
        <ul>
          {this.state.users.map((user) => {
            return (
              <li>
                
                <Link to={{pathname:`/users/${user.first_name}`,state:user}}>
                  {user.first_name}
                </Link>

           {/*  <Link to={`/users/${user.first_name}`}>
                  {user.first_name}
                </Link> */}
              </li>
            );
          })}
        </ul>
       
       {/* <Route path="/users/:name">
           <User users={this.state.users}/>
       </Route> //we will not receive browser router props */}
       {/* <Route path="/users/:name" render={(props)=><User {...props} users={this.state.users}/>}/> */}
      
      </div>
    );
  }
}

