import React, { Component } from 'react';
import './homepage.css';
import CardCar from '../../components/CardCar/Cardcar';
import CardPost from '../../components/CardPost/Cardpost';

class homepage extends Component {

  state = {
    listCars: [
      { _id: 1, model: "Vw Scirocco R", image: "https://blhmotor2017.net/wp-content/uploads/2019/04/front-r.jpg", price: "19.990" },
      { _id: 2, model: "Renault Megane RS", image: "https://blhmotor2017.net/wp-content/uploads/2019/05/IMG_2005.jpg", price: "9.900" },
      { _id: 3, model: "VW Golf GTI", image: "https://blhmotor2017.net/wp-content/uploads/2019/05/IMG_1857-1200x900.jpg", price: "23.990" },
      { _id: 4, model: "Opel Corsa OPC", image: "https://blhmotor2017.net/wp-content/uploads/2019/05/IMG_1857-1200x900.jpg", price: "9.990" }
    ],
    postList: [
      {
        _id: 5,
        title: "Primer Contacto: VW Scirocco R",
        fecha: "21 ABRIL, 2019",
        image: "https://blhmotor2017.net/wp-content/uploads/2019/04/front-r.jpg",
        text: "En una época dominada por los GTI Mk6, hoy os traemos uno de sus hermanos el cual no pasa desapercibido cuando lo vemos por la calle: El Volkswagen Scirocco R"
      },
      {
        _id: 6,
        title: "Salón del automóvil 2019",
        fecha: "14 MAYO, 2019",
        image: "https://blhmotor2017.net/wp-content/uploads/2019/04/front-r.jpg",
        text: "En una época dominada por los GTI Mk6, hoy os traemos uno de sus hermanos el cual no pasa desapercibido cuando lo vemos por la calle: El Volkswagen Scirocco R"
      }
    ]
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

  renderPostList() {
    return this.state.postList.map((post, id) => {
      if (id < 3) {
        return <CardPost
          key={`id-${id}`}
          post={post}
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
          <button>Todos los coches</button>
        </section>
      </div>
    );
  }
}

export default homepage;