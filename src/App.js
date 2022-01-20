//Import statements
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Hero from "./pages/Hero/Hero";
import Nav from "./components/Nav/Nav";
import UnderConstruction from './components/UnderConstruction/UnderConstruction';
import "react-typist/dist/Typist.css";

function App() {

  return(
    <Router>
      <Nav/>
      <Routes>
        <Route path="/about" element={<UnderConstruction/>}/>
        <Route path="/projects" element={<UnderConstruction/>}/>
        <Route path="/contact" element={<UnderConstruction/>}/>
        <Route path="/resume" element={<UnderConstruction/>}/>
        <Route path="/" element={<Hero/>}/>
      </Routes>
    </Router>
  );
};

export default App;
