import axios from "axios";
import { useHistory } from "react-router-dom";
import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import AuthContext from "../../../context/auth-context";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function login(e) {
    e.preventDefault();
    try {
      const loginData = {
        email,
        password,
      };
      
      await axios.post("http://localhost:3000/auth/login", loginData);
      await getLoggedIn();
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="container">
      <h1>Login your account!</h1>
      <br />
      <Form onSubmit={login}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="password placeholder"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </FormGroup>
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
};

export default Login;
