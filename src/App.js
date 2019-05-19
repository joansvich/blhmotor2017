import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import homepage from './pages/homepage/homepage';
import notfound from './pages/notfound';
import coches from './pages/coches';
import createCars from './pages/createCars/createCars';
import Navbar from './components/Navbar/Navbar';

class App extends Component {

  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={homepage} />
          <Route exact path="/coches" component={coches} />
          <Route exact path="/create" component={createCars} />
          <Route path="" component={notfound} />
        </Switch>
      </>
    )
  }
}

export default App;

