//Import statements
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
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
        <Route path="/" element={<Hero/>}/>
        <Route exact path="/about" element={<UnderConstruction/>}/>
        <Route exact path="/projects" element={<UnderConstruction/>}/>
        <Route exact path="/contact" element={<UnderConstruction/>}/>
        <Route exact path="/resume" element={<UnderConstruction/>}/>
      </Routes>
    </Router>
  )
}

export default App;
