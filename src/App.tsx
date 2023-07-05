import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import Description from './components/Description';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  //TODO:
  // setup dark mode functionality
  // display all project images (will require refactoring of projects)
  // create readME for CV builder
  // setup little monitor preview ting
  // download CV button

  return (
    <div className="App flex justify-center overflow-x-hidden">
      <div className="flex flex-col relative items-center max-w-[screen] overflow-x-hidden">
        <Navbar />
        <Home />
        <Description />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
