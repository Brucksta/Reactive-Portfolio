//import components
//import css
import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  
import AboutMe from '../src/components/About-me';
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Portfolio from '../src/components/Portfolio';
import ContactMe from '../src/components/Contact-me'
import Resume from '../src/components/Resume'
import Home from '../src/components/Home'

function App() {
  return (
  <Router>
  <>
  <Header />
  
  <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <ContactMe />
          </Route>
          <Route path="/resume">
              <Resume />
          </Route>
        </Switch>
  </>
  <Footer />
  </Router>
  )
}

export default App;
