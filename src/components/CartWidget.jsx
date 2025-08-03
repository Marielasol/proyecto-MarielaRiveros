import React from 'react';
import imagenes from '../assets/img/imagenes';


const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img src={imagenes.imgcarrito} alt="Carrito de compras" width="30" />
      <span>0</span>
    </div>
  );
};

export default CartWidget;