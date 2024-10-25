// src/App.js
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Vacancy from "./pages/Vacancy";
import About from "./pages/About";
import Products from "./components/Products";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";

import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  

  return (
      <div className="wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vacancies" element={<Vacancy />} />
          <Route path="/product" element={<Products />} />
          <Route path="/products/:productName" element={<ProductDetails />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>
      </div>
  );  
}

export default App;

