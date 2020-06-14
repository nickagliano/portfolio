import React from 'react';
import './css/App.css';
import './css/Piano.css';
import Home from './Components/Home'
import About from './Components/About';
import Contact from './Components/Contact';
import DataScience from './Components/DataScience';
import FrontEnd from './Components/FrontEnd';
import Random from './Components/Random';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/data-science">
                        <DataScience />
                    </Route>
                    <Route path="/front-end">
                        <FrontEnd />
                    </Route>
                    <Route path="/random">
                        <Random />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
  );
}

export default App;
