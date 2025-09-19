import { Link } from 'react-router-dom';
import CartWidget from '../cart/CartWidget';
import { imagenes } from '../../assets/img/imagenes'
import './navbar.css'
import { useState } from 'react';



const NavBar = () => {
  const [mostrarCategorias, setMostrarCategorias] = useState(false);

  const toggleCategorias = () => {
    setMostrarCategorias(!mostrarCategorias);
  };
  return (
    <nav className="navbar">
      <div className='navbar-left'>
        <Link to="/">
        <img src={imagenes.imgLogo} className="logo"  alt='logo-tienda'/>
        </Link>
        <div className='servicios-container'>
          <button onClick={toggleCategorias} className='servicios-btn'>Servicios</button>
          {mostrarCategorias && (
            <div className='categorias-dropdown'>
              <Link to="/categoria/uñas" className="categoria-btn">Uñas</Link>
              <Link to="/categoria/mirada" className="categoria-btn">Mirada</Link>
              <Link to="/categoria/cabello" className="categoria-btn">Cabello</Link>
              <Link to="/categoria/piel" className="categoria-btn">Piel</Link>
            </div>

          )}
      
      </div>
      </div>
      <div className="navbar-right">
    
        <CartWidget />
      </div>

    </nav>
  );
};


export default NavBar;