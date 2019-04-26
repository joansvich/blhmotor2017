import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <div>
            <img className="logo" src="./images/logo-light.png" alt="" />
          </div>
          <ul>
            <li><Link className="link" to='/'>Inicio</Link></li>
            <li><Link className="link" to='/'>Catálogo</Link>
              <ul>
                <li><Link className="link" to='/coches'>Coches</Link></li>
                <li><Link className="link" to='/'>Accesorios</Link></li>
              </ul>
            </li>
            <li><Link className="link" to='/'>Nosotros</Link></li>
            <li><Link className="link" to='/'>Contacto</Link></li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;