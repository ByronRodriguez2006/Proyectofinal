import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'; // Ensure the path to the logo is correct
import '../Style/Navbar.css';

function Navbar() {


  
  return (
    <div className="main-container">
      <header className="header">
        <div className="logo">
          {/* Wrap the img inside the Link component to make it clickable */}
          <Link to="/">
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav-links">
            <Link to="/Servicios">Servicios</Link>
            <Link to="/Tienda">Viajes</Link>
            <Link to="/Contactos">Contáctenos</Link>
            <Link to="/Mapa">ubicación</Link>
          </ul>
          <button  className="btn_contact"> <Link to="/Login">Iniciar Sesión</Link></button>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
