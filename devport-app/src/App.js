import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Project />
    </div>
  );
}

export default App;
