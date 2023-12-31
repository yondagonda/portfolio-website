import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Description from './components/Description';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import DarkModeToggle from './components/Buttons/DarkModeToggle';

function App() {
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
        <DarkModeToggle />
      </div>
    </div>
  );
}

export default App;
