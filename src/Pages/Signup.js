import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./Signup.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = function() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const navigate = useNavigate();
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      if (user) navigate("/Signin");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="form-container">
      <Form>
        <div className="flex-item">
          <h2>Sign Up!</h2>
          {/* <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" /> */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              onChange={(event) => setRegisterEmail(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" type="password">
            <Form.Label>Enter Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              onChange={(event) => setRegisterPassword(event.target.value)}
            />
          </Form.Group>
          {/* </Form.Group> */}
          <Button onClick={register}>Sign Up!</Button>
        </div>
      </Form>
    </div>
  );
};
export default SignUp;
