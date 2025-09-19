import { useCart } from "../../context/cartContext";
import "./cart.css";
import "./cart.css";

export default function CartItem({ item }) {
  const { removeItem } = useCart();
  return (
    <li className="cart-item">
      <img src={item.imagen} alt={item.nombre} />
      <div className="cart-details">
        <h4>{item.nombre}</h4>
        <p>Cantidad: {item.qty}</p>
        <p>Precio: ${item.precio} · Subtotal: ${item.precio * item.qty}</p>
      </div>
      <button onClick={() => removeItem(item.id)} className="btn">Eliminar</button>
    </li>
  );
}