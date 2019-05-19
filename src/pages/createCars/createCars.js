import React, { Component } from 'react';
import carsService from '../../lib/cars-service';

class createCars extends Component {
  state = {
    model: "",
    image: "",
    price: ""
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { model, image, price } = this.state
    carsService.create({ model, image, price })
      .then((carCreated) => this.props.history.push('/'))
      .catch()
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { model, image, price } = this.state;
    return (
      <>
      <form onSubmit={this.handleFormSubmit}>
        <p>Modelo</p>
        <input className="component-input--input" type="text" name="model" value={model} onChange={this.handleChange} />
        <p>Imagen</p>
        <input className="component-input--input" type="text" name="image" value={image} onChange={this.handleChange} />
        <p>Precio</p>
        <input className="component-input--input" type="text" name="price" value={price} onChange={this.handleChange} />
        <button type="submit" className="" >Crear coche</button>
        </form>
      </>
    );
  }
}

export default createCars;