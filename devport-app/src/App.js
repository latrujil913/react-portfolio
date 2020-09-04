import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Hero />
      <Project />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
