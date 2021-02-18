import axios from "axios";
import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Register = (props) => {
  const { email, setEmail } = useState(0);
  const { password, setPassword } = useState(0);
  const { confirmPassword, setConfirmPassword } = useState(0);

  async function register(e) {
    e.preventDefault();
    try {
      const registerData = {
        email,
        password,
        confirmPassword,
      };

      await axios.post("http://localhost:3000/auth/", registerData);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="container">
      <h1>Register your account!</h1>
      <br />
      <Form onSubmit={register}>
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
        <FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="password placeholder"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Register;
