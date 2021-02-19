import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./components/auth/login/login";
import Register from "./components/auth/register/register";
import Header from "./components/layout/header";
import AuthContext from "./context/auth-context";

function Router() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <div>Home</div>
        </Route>
        {loggedIn === false && (
          <>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
