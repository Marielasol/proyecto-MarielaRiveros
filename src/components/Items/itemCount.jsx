import { useEffect, useState } from "react";
import "./item.css";

export default function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  useEffect(() => setCount(initial), [initial]);

  const dec = () => setCount(c => Math.max(1, c - 1));
  const inc = () => setCount(c => Math.min(stock, c + 1));
  const add = () => {
    if (stock <= 0) return;
    onAdd(count);
  };

  return (
    <div className="counter">
      <div className="controls">
        <button onClick={dec} disabled={count <= 1}>-</button>
        <span>{count}</span>
        <button onClick={inc} disabled={count >= stock}>+</button>
      </div>
      <button onClick={add} disabled={stock <= 0} className="btn2">
        Agregar al carrito
      </button>
      {stock <= 5 && stock > 0 && <small>Quedan {stock} unidades</small>}
      {stock === 0 && <small>Sin stock</small>}
    </div>
  );
}