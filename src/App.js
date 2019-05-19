import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import homepage from './pages/homepage/homepage';
import notfound from './pages/notfound';
import createCars from './pages/createCars/createCars';
import listCars from './pages/listCars/listCars';
import Navbar from './components/Navbar/Navbar';

class App extends Component {

  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={homepage} />
          <Route exact path="/create" component={createCars} />
          <Route exact path="/cars" component={listCars} />
          <Route path="" component={notfound} />
        </Switch>
      </>
    )
  }
}

export default App;

