import React from 'react';

import './App.css';
import NavBar from "./components/NavBar/NavBar"
import Dashboard from "./components/Dashboard/Dashboard"
import Reviews from "./components/Reviews/reviews"
import Styles from "./components/Styles/styles"
import Store from "./components/Store/store"
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


const App = () => {


  return (
    <Router>

  <NavBar />
  
  <Switch>
          <Route path="/Dashboard">
            <Dashboard />
            
          </Route>
          <Route path="/Reviews">
            <Reviews/>
            
          </Route>
          <Route path="/Store">
            <Store/>
            
          </Route>
          <Route path="/Styles">
            <Styles/>
            
          </Route>
        </Switch>
  </Router>
  );

};

export default App;
