import { Link } from 'react-router-dom';
import './itemDetail.css'

const ItemDetail = ({ producto }) => {
    if (!producto) return <p>Cargando producto...</p>;

  return (
    <div className="card" key={producto.id}>
      <img src={producto.img} alt={producto.name} />
      <h3>{producto.name}</h3>
      <h4>${producto.price}</h4>
      <p>{producto.descripcion}</p> 

      <Link to="/">
        <button className='volver-btn'>Volver al catálogo</button>
      </Link>
    </div>
  );
};

export default ItemDetail;
