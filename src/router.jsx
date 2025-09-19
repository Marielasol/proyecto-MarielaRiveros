import { BrowserRouter, Routes, Route} from 'react-router-dom';
import App from "./App.jsx";
import ItemListContainer from "./components/Items/ItemListContainer.jsx";
import ItemDetailContainer from "./components/Items/itemDetailContainer.jsx";
import Cart from "./components/cart/cart.jsx";
import CheckoutForm from "./components/checkout/checkoutForm.jsx";
import Contacto from './components/contacto/contacto.jsx';


export default function Router() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Catálogo" />} />
          <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="*" element={<h2>404 - No encontrado</h2>} />
          <Route path="/contacto" element={<Contacto/>}/>
        </Routes>
      </App>
    </BrowserRouter>
  );
};