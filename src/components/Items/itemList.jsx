import Item from "./item";
import "./item.css";

export default function ItemList({ items }) {
  return (
    <section className="grid">
      {items.map(p => <Item key={p.id} product={p} />)}
    </section>
  );
}