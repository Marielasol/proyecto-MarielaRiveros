import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import CartItem from "../cart/cartItem";
import "./cart.css";

export default function Cart() {
  const { items, totalPrice, clear } = useCart();

  if (!items.length) {
    return (
      <section className="cart-card">
        <h2>Carrito</h2>
        <p>Tu carrito está vacío.</p>
        <Link to="/" className="btn">Ir al catálogo</Link>
      </section>
    );
  }

  return (
    <section className="cart-card">
      <h2>Carrito</h2>
      <ul className="cart-list">
        {items.map(i => <CartItem key={i.id} item={i} />)}
      </ul>
      <div className="cart-btn">
        <p>Total: ${totalPrice}</p>
        <button className="btn" onClick={clear}>Vaciar</button>
        <Link to="/" className="btn2">Agregar mas productos</Link>
        <Link to="/checkout" className="btn1">Finalizar compra</Link>
      </div>
    </section>
  );
}