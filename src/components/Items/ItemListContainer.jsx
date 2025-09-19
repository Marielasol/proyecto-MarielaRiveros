
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "./itemList";
import { getProducts, getProductsByCategory } from "../../services/firebase/products";

export default function ItemListContainer({ greeting = "Catálogo" }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetcher = categoryId ? getProductsByCategory(categoryId) : getProducts();
    fetcher.then(setItems).finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <p>Cargando productos...</p>;
  if (!items.length) return <p>No hay productos en esta categoría.</p>;

  return (
    <>
      <h1>{greeting}{categoryId ? ` · ${categoryId}` : ""}</h1>
      <ItemList items={items} />
    </>
  );
}