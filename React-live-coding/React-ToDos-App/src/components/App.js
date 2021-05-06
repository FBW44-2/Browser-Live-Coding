import React from "react";
import "../css/App.scss";
import Navigation from "./Navigation";
import ToDosContainer from "./ToDosContainer";
import ToDonesContainer from "./ToDonesContainer";

import { HashRouter, Route, Switch } from "react-router-dom";
import Help from "../views/Help";
import NotFound from "../views/NotFound";
import DetailedTaskComp from "./DetailedTaskComp";
import Container from "../context/Container";

const App = () => {
  
  return (
    <Container>
      <HashRouter>
        <div className="app">
          <Navigation></Navigation>
          <Switch>
            {/*  <Route path="/" component={}/> */}
            {/*  <Route path="/" render={()=>(<><ToDosContainer /> <ToDonesContainer /> </>)} /> */}
            <Route exact path="/">
              <ToDosContainer/>
              <ToDonesContainer/>
            </Route>

            <Route path="/help">
              <Help />
            </Route>

            <Route path="/task/:text">
              <DetailedTaskComp />
            </Route>

            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </HashRouter>
    </Container>
  );
};

export default App;
