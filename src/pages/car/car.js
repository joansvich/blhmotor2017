import React, { Component } from 'react';
import carsService from '../../lib/cars-service';

class car extends Component {

  state = {
    car: [],
    isLoading: true
  }

  componentDidMount() {
    carsService.getCar(this.props.match.params.id)
      .then((car) => {
        this.setState({
          car: car,
          isLoading: false
        })
      })
  }


  render() {
    const {model, price, image} = this.state.car

    return (
      <div>
        <h1>{model}</h1>
      </div>
    );
  }
}

export default car;