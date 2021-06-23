
import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Container from './context/Container';
import Header from './components/Header';
import Home from './components/Home';
import Signup from "./components/Signup"
import Login from './components/Login';

function App() {
  return (
    <Container> 
    <BrowserRouter> 
    <div className="App">
      <h1>Record Shop Express-Server</h1>
      <Header/>


      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
      </Switch>

    </div>
    </BrowserRouter>
    </Container>
  );
}


export default App;