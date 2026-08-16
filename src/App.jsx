import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import { WishlistProvider } from "./context/WishlistContext";
import Wishlist from "./pages/Wishlist";
import Footer from "./components/Footer";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import ScrollToTop from "./components/ScrollToTop";

function About() {
  return (
    <main style={{ paddingTop: "140px", padding: "140px 6vw" }}>
      <h1>About ShopSphere</h1>
      <p>Thoughtfully selected products for everyday living.</p>
    </main>
  );
}


function NotFound() {
  return (
    <main style={{ paddingTop: "140px", padding: "140px 6vw" }}>
      <h1>404</h1>
      <p>Page not found.</p>
    </main>
  );
}

function App() {
  return (
    <CartProvider>
    <WishlistProvider>
    <ScrollToTop />
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route
  path="/order-success"
  element={<OrderSuccess />}
/>

      <Route
        path="/products/:id"
        element={<ProductDetails />}
      />
      <Route
  path="/wishlist"
  element={<Wishlist />}
/>

    </Routes>
    <Footer />
  </WishlistProvider>
</CartProvider>
  );
}

export default App;