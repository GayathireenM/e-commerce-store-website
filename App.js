import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import Cart from './Cart';
import Checkout from './Checkout';
import Login from './Login';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
    console.log('Item added to cart:', item);
  };

  const handleRemoveFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    console.log('Item removed from cart:', item);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<Login onLogin={setIsAuthenticated} />} />
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
          <Route path="/menu" element={isAuthenticated ? <Menu onAddToCart={handleAddToCart} /> : <Navigate to="/login" />} />
          <Route path="/cart" element={isAuthenticated ? <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} /> : <Navigate to="/login" />} />
          <Route path="/checkout" element={isAuthenticated ? <Checkout /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
