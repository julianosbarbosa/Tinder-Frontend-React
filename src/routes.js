import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dev/:id" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
