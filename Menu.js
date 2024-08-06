import React, { useState } from 'react';
import MenuItem from './MenuItem';

const Menu = ({ onAddToCart }) => {
  const [menuItems] = useState([
    { id: 1, name: 'Pizza', description: 'Delicious cheese pizza', price: 9.99 },
    { id: 2, name: 'Burger', description: 'Juicy beef burger', price: 7.99 },
    { id: 3, name: 'Pasta', description: 'Tasty pasta with marinara sauce', price: 8.99 },
  ]);

  return (
    <div className="menu">
      <h2>Menu</h2>
      {menuItems.map((item) => (
        <MenuItem key={item.id} item={item} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default Menu;
