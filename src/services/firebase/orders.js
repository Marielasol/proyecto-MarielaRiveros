import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./config";

export async function createOrder({ buyer, items, total }) {
  const order = {
    buyer,
    items: items.map(i => ({
      id: i.id,
      title: i.nombre,
      price: i.precio,
      qty: i.qty,
    })),
    total,
    createdAt: serverTimestamp(),
    status: "generated",
  };
  const ref = await addDoc(collection(db, "orders"), order);
  return ref.id;
}