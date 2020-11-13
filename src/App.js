import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/pages/Home.js';
import About from './components/pages/About.js';
import Projects from './components/pages/Projects.js';
import Contact from './components/pages/Contact.js';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about-me' exact component={About}/>
            <Route path='/projects' exact component={Projects}/>
            <Route path='/contact' exact component={Contact}/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
