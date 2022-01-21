//Import statements
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import "react-typist/dist/Typist.css";

import Nav from "./components/Nav/Nav";
import Hero from "./pages/Hero/Hero";
import UnderConstruction from './components/UnderConstruction/UnderConstruction';
import About from './pages/About/About';


function App() {

  return(
    <Router>
      <Nav/>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<UnderConstruction/>}/>
        <Route path="/contact" element={<UnderConstruction/>}/>
        <Route path="/resume" element={<UnderConstruction/>}/>
        <Route path="/" element={<Hero/>}/>
      </Routes>
    </Router>
  );
};

export default App;
