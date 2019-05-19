import React, { Component } from 'react';
import CardCar from '../../components/CardCar/Cardcar';
import carsService from '../../lib/cars-service';
import './listCars.css';
class listCars extends Component {

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
      return <CardCar
        key={`id-${id}`}
        car={car}
      />
    })
  }

  render() {
    return (
      <div className="all-cars">
        <h1 className="title-all-cars">Todos los coches</h1>
        <div className="tags-marcas">
          <button className="btn-marca">seat</button>
          <button className="btn-marca">audi</button>
          <button className="btn-marca">bmw</button>
          <button className="btn-marca">ford</button>
          <button className="btn-marca low">mercedes</button>
          <button className="btn-marca">honda</button>
          <button className="btn-marca">vw</button>
          <button className="btn-marca">lexus</button>
        </div>
        <div className="list-cars">
          {this.renderCarList()}
        </div>
      </div>
    );
  }
}

export default listCars;