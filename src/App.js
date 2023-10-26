
import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Home from './components/Home';
import { Routes ,Route } from "react-router-dom";
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
                          <Route exact path="/home" element={<Home />} />
                          {/* <Route exact path="/about" element={<MatchForm />} /> */}
                          <Route exact path="/skills" element={<Skills />} />
                          {/* <Route exact path="/projects" element={<EditMatchForm rendering={rendering}     />} /> */}
                          
                    </Routes>
    </div>
    
  );
}

export default App;
