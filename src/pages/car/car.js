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
    return this.state.car.images.forEach((image) => {
      console.log(image);
      return (<><img src={image} alt="" /></>)
    })
  }

  render() {
    const { model, price, image } = this.state.car
    return (
      <div>
        {this.state.isLoading ? <p>Loading..</p> : <>
          <div className="slider">
            <a href="#slide-1">1</a>
            <a href="#slide-2">2</a>
            <a href="#slide-3">3</a>
            <a href="#slide-4">4</a>
            <div className="slides">
              <div id="slide-1">
                <img src={this.state.car.images[0]} alt="" />
              </div>
              <div id="slide-2">
                <img src={this.state.car.images[1]} alt="" />
              </div>
              <div id="slide-3">
                <img src={this.state.car.images[2]} alt="" />
              </div>
              <div id="slide-4">
                <img src={this.state.car.images[3]} alt="" />
              </div>
            </div>
          </div>
        </>}
      </div>
    );
  }
}

export default car;