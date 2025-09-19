import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "./itemDetail";
import { getProductById } from "../../services/firebase/products";

export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(itemId).then(setItem).finally(() => setLoading(false));
  }, [itemId]);

  if (loading) return <p>Cargando detalle...</p>;
  if (!item) return <p>Producto no encontrado.</p>;

  return <ItemDetail product={item} />;
}