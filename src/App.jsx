import React from 'react';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Proyects from './pages/Proyects/Proyects';
import Contact from './pages/Contact/Contact';
import './App.css';

function App() {
  return (
    <div>
      <div className="App">
        <Home />
        <About />
        <Skills />
        <Proyects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
