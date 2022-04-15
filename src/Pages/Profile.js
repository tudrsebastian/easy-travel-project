import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { Button } from "react-bootstrap";
export default function Profile() {
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div>
      <h1>Profile Page Incoming</h1>

      <Button variant="danger" onClick={logout}>
        Sign Out
      </Button>
    </div>
  );
}
