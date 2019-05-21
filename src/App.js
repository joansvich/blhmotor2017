import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import homepage from './pages/homepage/homepage';
import notfound from './pages/notfound';
import createCars from './pages/createCars/createCars';
import listCars from './pages/listCars/listCars';
import car from './pages/car/car';
import Navbar from './components/Navbar/Navbar';
import ButtonCall from './components/ButtonCall/ButtonCall';

class App extends Component {

  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={homepage} />
          <Route exact path="/create" component={createCars} />
          <Route exact path="/cars" component={listCars} />
          <Route exact path="/cars/:id" component={car} />
          <Route path="" component={notfound} />
        </Switch>
        <ButtonCall />
      </>
    )
  }
}

export default App;

