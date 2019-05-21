import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './cardcar.css';

class Cardcar extends Component {
  render() {
    const { model, image, price } = this.props.car
    return (
      <div className="card-car">
        <img src={image} alt=""/>
        <h3>{price} €</h3>
        <h1>{model}</h1>
      </div>
    );
  }
}

export default Cardcar;