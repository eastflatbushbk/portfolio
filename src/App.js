
import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Home from './components/Home';
import { Routes ,Route } from "react-router-dom";
import Skills from './components/Skills';
import Project from './components/Project';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
                          <Route exact path="/home" element={<Home />} />
                          {/* <Route exact path="/about" element={<MatchForm />} /> */}
                          <Route exact path="/skills" element={<Skills />} />
                          <Route exact path="/projects" element={<Project   />} />
                          
                    </Routes>
    </div>
    
  );
}

export default App;
