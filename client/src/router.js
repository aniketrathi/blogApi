import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Login from "./components/auth/login/login";
import Register from "./components/auth/register/register";
import BlogDetail from "./components/home/home-detail";
import Blog from "./components/home/homes";
import Header from "./components/layout/header";

// const BlogWithId = ({match}) => {
//   return <BlogDetail blogid = {match.params.id} />
// }

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route path="/blog/:id">
          <BlogDetail />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Redirect to="/blog" />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
