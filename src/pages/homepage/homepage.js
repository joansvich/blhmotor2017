import React, { Component } from 'react';
import './homepage.css';

class homepage extends Component {
  render() {
    return (
      <div>
        <section className="first-banner">
          <div className="container--80 flex--column flex--center">
            <h1><span>Consigue tu</span> coche</h1>
            <h2>con BLH Motor 2017</h2>
            <p>Hacemos realidad tus sueños. Tu pide el coche que quieras <br />y nosotros hacemos lo que sea para traértelo.</p>
          </div>
        </section>
        <section className="eslogan">
          <div className="container flex--column flex--center">
            <span>2017</span>
            <h1>Bienvenido a <b>BLH Motor</b></h1>
            <p>Donde hacemos realidad tus sueños</p>
          </div>
        </section>
        <section className="grid-cars">
          <img src="/images/varis/1.jpg" alt=""/>
          <img src="/images/varis/2.jpg" alt=""/>
          <img src="/images/varis/3.jpg" alt=""/>
          <img src="/images/varis/4.jpg" alt=""/>
          <img src="/images/varis/5.jpg" alt=""/>
          <img src="/images/varis/6.jpg" alt=""/>
          <img src="/images/varis/7.jpg" alt=""/>
          <img src="/images/varis/8.jpg" alt=""/>
          <img src="/images/varis/9.jpg" alt=""/>
          <img src="/images/varis/10.jpg" alt=""/>
        </section>
        <section className="second-banner">
          <div>
            
          </div>
        </section>
      </div>
    );
  }
}

export default homepage;