
import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); 

  const addItem = (product, qty) => {
    setItems(prev => {
      const exists = prev.find(i => i.id === product.id);
      const newQty = exists ? exists.qty + qty : qty;
    
      if (exists) {
        return prev.map(i => (i.id === product.id ? { ...i, qty: newQty } : i));
      }
      return [...prev, { ...product, qty }];
    });
  };

  const removeItem = (id) => setItems(prev => prev.filter(i => i.id !== id));
  const clear = () => setItems([]);
  const totalUnits = useMemo(() => items.reduce((acc, i) => acc + i.qty, 0), [items]);
  const totalPrice = useMemo(() => items.reduce((acc, i) => acc + i.precio * i.qty, 0), [items]);

  const value = { items, addItem, removeItem, clear, totalUnits, totalPrice };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
