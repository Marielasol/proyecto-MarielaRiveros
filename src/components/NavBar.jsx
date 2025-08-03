import React from 'react';
import CartWidget from './CartWidget';
import imagenes from '../assets/img/imagenes';


const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>
            <img src={imagenes.imgesmalte} />
        </h1>
      </div>
      <ul className="navbar-links">
        <li>Servicios</li>
        <li>Productos</li>
        <li>Nuestro salon</li>
      </ul>
      <CartWidget />
    
    </nav>
  );
};

export default NavBar;