import React, { useState } from "react";
import Form from "react-bootstrap/esm/Form";
import "./Signin.css";
import { Button } from "react-bootstrap";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
export default function Signin() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const navigate = useNavigate();
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      if (user) navigate("/Profile");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="form-container1">
      <Form>
        <div className="flex-item1">
          <h2>Log In!</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              onChange={(event) => setLoginEmail(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              onChange={(event) => setLoginPassword(event.target.value)}
            />
          </Form.Group>
          <Button onClick={login}>Log In!</Button>
        </div>
      </Form>
    </div>
  );
}
