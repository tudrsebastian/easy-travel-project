import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./Components/Navigation";
import App from "./App";
import Aboutus from "./Pages/Aboutus";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
