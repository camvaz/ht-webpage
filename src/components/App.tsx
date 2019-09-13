import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import Inicio from './Inicio';
import { createBrowserHistory } from 'history';
import { NavBar } from './NavBar';

class App extends Component {
  render = () => {
    let history = createBrowserHistory();
    return (
      <Router history={history}>
        <NavBar history transparent actualSection={"Inicio"} />
        <Route path="/" exact component={Inicio}/>
      </Router>
    )
  };
}

export default App;
