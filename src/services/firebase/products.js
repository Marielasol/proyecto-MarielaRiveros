import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "./config";

const colRef = collection(db, "products");

export async function getProducts() {
  const snap = await getDocs(colRef);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function getProductsByCategory(categoriaId) {
  const q = query(colRef, where("categoria", "==", categoriaId));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function getProductById(id) {
  const snap = await getDoc(doc(db, "products", id));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}