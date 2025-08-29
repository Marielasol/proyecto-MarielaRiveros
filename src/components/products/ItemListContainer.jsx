

import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos } from "../../data/productos";
import './itemListContainer.css';


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    getProductos().then((data) => {
      if (categoriaId) {
        const filtrados = data.filter((p) => p.categoria === categoriaId);
        setProductos(filtrados);
      } else {
        setProductos(data);
      }
    });
  }, [categoriaId]);

  return (
  <div className="item-list">
    {productos.map((producto) => (
      <div className="card" key={producto.id}>
        <img src={producto.img} alt={producto.name} />
        <h3>{producto.name}</h3>
        <h4>${producto.price}</h4>
        <Link to={`/producto/${producto.id}`} className="ver-detalle-btn">
  Ver detalle
</Link>
      </div>
    ))}
  </div>
);
}

export default ItemListContainer;