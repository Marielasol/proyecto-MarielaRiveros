import NavBar from "./components/Navbar/NavBar";
import { CartProvider } from "./context/cartContext";
import Footer from "./components/Footer/footer";

export default function App({ children }) {
  return (
    <CartProvider>
      <NavBar />
      <main className="container">{children}</main>
      <Footer/>
    </CartProvider>

  );
};