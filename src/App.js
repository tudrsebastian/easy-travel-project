import React from "react";
import Footer from "./Footer";
import Main from "./Components/Main";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", border: "groove 1px" }}>
        Book Best Tours In the World
      </h1>

      <Main />
      <Footer />
    </div>
  );
}

export default App;
