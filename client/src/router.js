import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "./components/auth/register/register";
import Header from "./components/layout/header";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <div>Home</div>
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <div>Login</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
