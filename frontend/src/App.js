import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "./components/ui/toaster";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/new-arrivals" element={<Shop />} />
            <Route path="/best-sellers" element={<Shop />} />
            <Route path="/celebs" element={<Home />} />
            <Route path="/tote-bags" element={<Shop />} />
            <Route path="/sale" element={<Shop />} />
            <Route path="/founders-edit" element={<Shop />} />
            <Route path="/about" element={<Home />} />
          </Routes>
          <Footer />
          <Toaster />
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
