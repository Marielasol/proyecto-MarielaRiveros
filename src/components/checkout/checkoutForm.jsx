import { useState } from "react";
import { useCart } from "../../context/cartContext";
import { createOrder } from "../../services/firebase/orders";
import { Link } from "react-router-dom";
import "./checkoutForm.css"

export default function CheckoutForm() {
  const { items, totalPrice, clear } = useCart();
  const [buyer, setBuyer] = useState({ nombre: "", email: "", telefono: "" });
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const disabled = !buyer.nombre || !buyer.email || !buyer.telefono || !items.length;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const id = await createOrder({ buyer, items, total: totalPrice });
      setOrderId(id);
      clear();
    } catch (err) {
      alert("Ocurrió un error al generar la orden.");
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <section className="checkout">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu ID de orden es: <strong>{orderId}</strong></p>
        <Link to="/" className="btn">Volver al inicio</Link>
      </section>
    );
  }

  if (!items.length) return <p>Tu carrito está vacío.</p>;

  return (
    <section>
      <h2>Finaliza tu orden</h2>
      <h3>Nos contactaremos con vos para coordinar el dia y horario que prefieras</h3>
      <form onSubmit={handleSubmit} className="form">
        <label>Nombre
          <input value={buyer.nombre} onChange={e => setBuyer({ ...buyer, nombre: e.target.value })} required />
        </label>
        <label>Email
          <input type="email" value={buyer.email} onChange={e => setBuyer({ ...buyer, email: e.target.value })} required />
        </label>
        <label>Teléfono
          <input value={buyer.telefono} onChange={e => setBuyer({ ...buyer, telefono: e.target.value })} required />
        </label>
        <button className="btn" type="submit" disabled={disabled || loading}>
          {loading ? "Procesando..." : "Confirmar compra"}
        </button>
      </form>
    </section>
  );
}