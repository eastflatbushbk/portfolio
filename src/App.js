
import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Home from './components/Home';
import { Routes ,Route, BrowserRouter } from "react-router-dom";
import Skills from './components/Skills';
import Project from './components/Project';
import WineFanaticPage from './components/WineFanaticPage';
import MatchdayPage from './components/MatchdayPage';

function App() {
  return (
    <div>
     
      <BrowserRouter basename={process.env.PUBLIC_URL}>
         <Navbar/>
            <Routes>
                          <Route exact path="/portfolio" element={<Home />} />
                          {/* <Route exact path="/about" element={<About />} /> */}
                          <Route  path="/portfolio/skills" element={<Skills />} />
                          <Route  path="/portfolio/projects" element={<Project   />} />
                          <Route  path="/portfolio/project-one" element={<WineFanaticPage />} />
                          <Route  path="/portfolio/project-two" element={<MatchdayPage  />} />
                         </Routes>                        
                    </BrowserRouter>
                    <Home />
                    <Skills />
                    <Project   />
    </div>
    
  );
}

export default App;
