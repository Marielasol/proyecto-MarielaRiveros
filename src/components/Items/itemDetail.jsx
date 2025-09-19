
import { useState } from "react";
import ItemCount from "./itemCount";
import { useCart } from "../../context/cartContext";
import { Link } from "react-router-dom";
import "./item.css";

export default function ItemDetail({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (qty) => {
    addItem(product, qty);
    setAdded(true);
  };

  return (
    <section className="detail">
      <img src={product.imagen} alt={product.nombre} />
      <div className="detail2">
        <h2>{product.nombre}</h2>
        <p>{product.descripcion}</p>
        <h3>${product.precio}</h3>
        {!added ? (
          <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
        ) : (
          <div>
            <p className="success-message">✅ Producto agregado con éxito</p>
            <div className="cart-btn">
            <Link to="/cart" className="btn1">Ir al carrito</Link>
            <Link to="/" className="btn2">Seguir comprando</Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
