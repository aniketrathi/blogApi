import axios from "axios";
import React from "react";
import Router from "./router";

import { AuthContextProvider } from "./context/auth-context";

axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  );
}

export default App;
