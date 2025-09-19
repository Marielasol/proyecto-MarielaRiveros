import { Link } from "react-router-dom";
import "./item.css";

export default function Item({ product }) {
  const { id, nombre, precio, imagen } = product;
 
  return (
    <article className="card">
      <img src={imagen} alt={nombre} className="image" />
      <h3>{nombre}</h3>
      <p>${precio}</p>
      <Link to={`/item/${id}`} className="btn">Ver detalle</Link>
      
      
      
    </article>
  );
}
