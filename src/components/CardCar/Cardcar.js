import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './cardcar.css';
import LazyLoad from 'react-lazyload';

class Cardcar extends Component {
  componentDidMount() {
    console.log("montado");
  }
  
  render() {
    const { _id, model, image, price, folder } = this.props.car
    return (
      <Link to={`/cars/${_id}`}><div className="card-car">
        <LazyLoad height={300} once={true}>
          <img src={`/images/cars/${folder}/thumbnail.jpg`} alt="" />
        </LazyLoad>
        <h3>{price} €</h3>
        <h1>{model}</h1>
      </div ></Link>
    );
  }
}

export default Cardcar;