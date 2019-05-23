import React, { Component } from 'react';
import carsService from '../../lib/cars-service';
import './car.css';

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

  renderImages = () => {
    const { folder } = this.state.car;
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    return numbers.map((i) => {
      return <>
        <div id={`slide-${i}`}>
          <img src={`/images/cars/${folder}/${i}.jpg`} alt="" />
        </div>
      </>
    })
  }

  render() {
    const { model, price, image, folder } = this.state.car
    return (
      <div>
        {this.state.isLoading ? <p>Loading..</p> : <>
          <div className="slider">
            <div className="slides">
              {this.renderImages()}
            </div>
          </div>
        </>}
      </div>
    );
  }
}

export default car;