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
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';


function App() {

  return(
    <Router>
      <Nav/>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/" element={<Hero/>}/>
      </Routes>
    </Router>
  );
};

export default App;
