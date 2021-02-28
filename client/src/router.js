import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./components/auth/login/login";
import Register from "./components/auth/register/register";
import BlogDetail from "./components/home/home-detail";
import Blog from "./components/home/homes";
import Header from "./components/layout/header";
import AuthContext from "./context/auth-context";
import BlogContext from "./context/blog-context";

const BlogWithId = ({ match }) => {
  const { blogs } = useContext(BlogContext);
  console.log(blogs[0]._id.toString()+ "=== " + match.params.blogId.toString());
  return (
    <BlogDetail
      blog={blogs.filter(
        (blog) => blog._id.toString() === match.params.blogId.toString()
      )}
    />
  );
};

function Router() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Blog />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/:blogId" component={BlogWithId} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
