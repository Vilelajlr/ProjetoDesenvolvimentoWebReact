
import './App.css';
import React from 'react';

import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Houses from './pages/Houses';
import About from './pages/About';
import Contact from './pages/Contact';



function App() {

  




  return (
    <div className="App">
      <Navbar />
      <Home />
      <Houses />
      <About />
      <Contact />
      
    </div>
  );
}

export default App;
