import React, { Component } from 'react';
import carsService from '../../lib/cars-service';
import CardCar from '../../components/CardCar/Cardcar';

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
    const { model, price, image } = this.state.car

    return (
      <div>
        <CardCar
          car={this.state.car}
        />
      </div>
    );
  }
}

export default car;