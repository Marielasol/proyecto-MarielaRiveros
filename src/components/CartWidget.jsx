
import {imagenes} from '../assets/imagenes'


const CartWidget = () => {
  return (
    <div className="cart-widget">
      <span className='num-cart'>0</span>
      <img src={imagenes.imgcarrito} alt="Carrito de compras" width="50" />
    </div>
  );
};

export default CartWidget;