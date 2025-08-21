import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import RestaurantsList from "./pages/RestaurantsList";
import RestaurantDetail from "./pages/RestaurantDetail"; 
import Hero from "./components/Hero";
import Cart from "./components/Cart";   // ← AJOUT
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [showCart, setShowCart] = useState(false); // ← état pour sidebar

  return (
    <Router>
      <Header onCartClick={() => setShowCart(true)} /> {/* bouton ouvre panier */}
        
      
      {/* Sidebar panier */}
      {showCart && <Cart onClose={() => setShowCart(false)} />}

      <Routes>
        {/* Page Accueil */}
        <Route path="/" element={
          <>
            <Hero />
            <RestaurantsList />
          </>
        } />
        
        {/* Page Détails d’un restaurant */}
        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
