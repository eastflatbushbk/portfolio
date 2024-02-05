
import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Home from './components/Home';
import { Routes ,Route } from "react-router-dom";
import Skills from './components/Skills';
import Project from './components/Project';
import WineFanaticPage from './components/WineFanaticPage';
import MatchdayPage from './components/MatchdayPage';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
                          <Route exact path="/home" element={<Home />} />
                          {/* <Route exact path="/about" element={<About />} /> */}
                          <Route exact path="/skills" element={<Skills />} />
                          <Route exact path="/projects" element={<Project   />} />
                          <Route exact path="/portfolio/project-one" element={<WineFanaticPage />} />
                          <Route exact path="/project-two" element={<MatchdayPage  />} />                       
                    </Routes>
    </div>
    
  );
}

export default App;
