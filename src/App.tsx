import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import Description from './components/Description';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App flex justify-center">
      <div className="flex flex-col relative items-center">
        <Navbar />
        <Home />
        <Description />
        <About />
        <Projects />
        <Skills />
      </div>
    </div>
  );
}

export default App;
