import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './cardcar.css';
import LazyLoad from 'react-lazyload'; import Loader from 'react-loader-spinner'

class Cardcar extends Component {

  render() {
    const { _id, model, image, price } = this.props.car
    return (
      <Link to={`/cars/${_id}`}><div className="card-car">
        <LazyLoad height={300}>
          <img src={image} alt="" />
        </LazyLoad>
        <h3>{price} €</h3>
        <h1>{model}</h1>
      </div ></Link>
    );
  }
}

export default Cardcar;