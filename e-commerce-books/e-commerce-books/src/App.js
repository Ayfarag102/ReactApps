import React from "react";
import Header from "./components/Header";
import Home from "./pages/Homepage";
import "./default.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Home />
      </div>
    </div>
  );
}

export default App;
