import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductoPorId } from "../../data/productos";
import ItemDetail from "./itemDetail";

const ItemDetailContainer = () => {
  const { productoId } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCargando(true);
    setError(null);

    getProductoPorId(productoId)
      .then((data) => {
        if (data) {
          setProducto(data);
        } else {
          setError("Producto no encontrado.");
        }
      })
      .catch(() => {
        setError("Hubo un problema al cargar el producto.");
      })
      .finally(() => {
        setCargando(false);
      });
  }, [productoId]);

  if (cargando) return <p>Cargando producto...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!producto) return null;

  
 return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;