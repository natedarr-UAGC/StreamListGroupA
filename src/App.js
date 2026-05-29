import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useState, useEffect} from "react";

import Navbar from "./components/Navbar";

import StreamList from "./pages/StreamList";
import Movies from "./pages/Movies";
import Subscriptions from "./pages/Subscriptions";
import Cart from "./pages/Cart";
import About from "./pages/About";

import './App.css';

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [warning, setWarning] = useState("");

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Router>
      <Navbar cart = {cart}/>
        {warning && (
          <div className = "warning">{warning}</div>
        )}
        <Routes>
          <Route path="/" element={<StreamList />} />

          <Route path = "/movies" element = {<Movies cart = {cart} setCart = {setCart}/>}/>

          <Route path="/subscriptions" element={<Subscriptions cart = {cart} setCart = {setCart} setWarning = {setWarning}/>} />
            
          <Route path="/cart" element={<Cart cart = {cart} setCart = {setCart}/>} />
            
          <Route path="/about" element={<About />} />
        </Routes>
    </Router>
  );
}

export default App;
