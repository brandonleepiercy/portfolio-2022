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
import "react-typist/dist/Typist.css";

function App() {
  return(
    <Router>
      <Nav/>
      <Routes>
        <Route exact path="/" component={Hero} />
        <Route exact path="/about"/>
        <Route exact path="/projects"/>
        <Route exact path="/contact"/>
        <Route exact path="/resume"/>
      </Routes>
      <Hero/>
    </Router>
  )
}

export default App;
