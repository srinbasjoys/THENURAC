import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-arrivals" element={<Home />} />
          <Route path="/best-sellers" element={<Home />} />
          <Route path="/celebs" element={<Home />} />
          <Route path="/shop" element={<Home />} />
          <Route path="/tote-bags" element={<Home />} />
          <Route path="/sale" element={<Home />} />
          <Route path="/founders-edit" element={<Home />} />
          <Route path="/about" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
