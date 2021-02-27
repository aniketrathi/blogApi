import axios from "axios";
import React from "react";
import Router from "./router";

import { AuthContextProvider } from "./context/auth-context";
import { BlogContextProvider } from "./context/blog-context";

axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextProvider>
      <BlogContextProvider>
        <Router />
      </BlogContextProvider>
    </AuthContextProvider>
  );
}

export default App;
