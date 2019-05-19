import React, { Component } from 'react';
import './homepage.css';
import CardCar from '../../components/CardCar/Cardcar';
import carsService from '../../lib/cars-service';
import { Link } from 'react-router-dom';

class homepage extends Component {

  state = {
    listCars: [],
    isLoading: true
  }

  componentDidMount() {
    carsService.list()
      .then((carList) => {
        this.setState({
          listCars: carList,
          isLoading: false
        })
      })
  }

  renderCarList() {
    return this.state.listCars.map((car, id) => {
      if (id < 4) {
        return <CardCar
          key={`id-${id}`}
          car={car}
        />
      }
      return <></>;
    })
  }


  render() {
    return (
      <div className="homepage">
        <section className="banner">
          <div className="banner-title">
            <h1>Bienvenido a <span>BLH Motor 2017</span></h1>
          </div>
          <p>Especialistas en vehículos de importación así como nacionales</p>
        </section>
        <section className="cars-available">
          <h2>Coches disponibles</h2>
          <div className="list-cars-available">
            {this.renderCarList()}
          </div>
          <div className="button-all-cars">
          <Link to="/cars"><button>Todos los coches</button></Link>
          </div>
        </section>
      </div>
    );
  }
}

export default homepage;