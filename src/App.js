
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
      {/* <BrowserRouter basename="/portfolio"> */}
            <Routes>
                          <Route exact path="/portfolio" element={<Home />} />
                          {/* <Route exact path="/about" element={<About />} /> */}
                          <Route  path="/portfolio/skills" Component={<Skills />} />
                          <Route exact path="/portfolio/projects" element={<Project   />} />
                          <Route exact path="/project-one" element={<WineFanaticPage />} />
                          <Route exact path="/project-two" element={<MatchdayPage  />} />
                         </Routes>                        
                    {/* </BrowserRouter> */}
                    <Home />
                    <Skills />
                    <Project   />
    </div>
    
  );
}

export default App;
