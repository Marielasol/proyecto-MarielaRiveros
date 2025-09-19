
import { Link } from "react-router-dom";
import {imagenes} from '../../assets/img/imagenes';
import { useCart } from "../../context/cartContext";

export default function CartWidget() {
const { totalUnits}  = useCart();
  return (
    
      <Link to="/cart" className="cart-widget" aria-label="Carrito">
      <img src={imagenes.imgCarrito} alt="Carrito de compras" width="50" />
      {totalUnits > 0 && <span className="badge">{totalUnits}</span>}
      </Link>
    
  );
};


