import "./App.css";
import React from "react";
import { GeneralInformation } from "./MyComponents/GeneralInformation";
import { Education } from "./MyComponents/Education";
import { Skills } from './MyComponents/Skills';
import { Experience } from './MyComponents/Experience';
import { Projects } from "./MyComponents/Projects";

function App() {
  return (
    <div className="App">
      <div>
        <GeneralInformation />
        <br />
        <Education />
        <br />
        <Skills />
        <br />
        <Experience />
        <br />
        <Projects />
      </div>
    </div>
  );
}

export default App;
