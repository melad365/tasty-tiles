import React, { useState } from 'react';
import TileList from './components/TileList';
import './App.css'; // For global styling.

const App = () => {
  const [dishes, setDishes] = useState([
    { id: 1, name: 'CousCous', image: 'https://thumbs2.imgbox.com/03/d4/sfEMU2a3_t.jpeg' },
    { id: 2, name: 'Prawn Pasta', image: 'https://images2.imgbox.com/c4/9a/90uc0H2z_o.jpg' },
    { id: 3, name: 'Embakebka', image: 'https://images2.imgbox.com/c4/9a/90uc0H2z_o.jpg' },
    { id: 4, name: 'Rice and Lamb', image: 'https://images2.imgbox.com/c4/9a/90uc0H2z_o.jpg' },
    { id: 5, name: 'CousCous', image: 'https://thumbs2.imgbox.com/03/d4/sfEMU2a3_t.jpeg' },
    { id: 6, name: 'Prawn Pasta', image: 'https://images2.imgbox.com/c4/9a/90uc0H2z_o.jpg' },
    { id: 7, name: 'Embakebka', image: 'https://images2.imgbox.com/c4/9a/90uc0H2z_o.jpg' },
    { id: 8, name: 'Rice and Lamb', image: 'https://images2.imgbox.com/c4/9a/90uc0H2z_o.jpg' },
    { id: 9, name: 'CousCous', image: 'https://thumbs2.imgbox.com/03/d4/sfEMU2a3_t.jpeg' },
    { id: 10, name: 'Prawn Pasta', image: 'https://images2.imgbox.com/c4/9a/90uc0H2z_o.jpg' },
    { id: 11, name: 'Embakebka', image: 'https://images2.imgbox.com/c4/9a/90uc0H2z_o.jpg' },
    { id: 12, name: 'Rice and Lamb', image: 'https://images2.imgbox.com/c4/9a/90uc0H2z_o.jpg' },
  ]);


  return (
    <div className="app">
      <h1>What's for Dinner?</h1>
      <TileList dishes={dishes} />
    </div>
  );
};

export default App;



