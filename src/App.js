import React, { useState } from 'react';
import './App.css'; // For global styling.
import Header from './components/header';
import TileList from './components/tileList';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { Box, Typography } from '@mui/material';

const App = () => {
  const [dishes, setDishes] = useState([
    { id: 1, name: 'CousCous with Fish', image: 'https://images2.imgbox.com/d4/52/pIaaDC6Q_o.png' },
    { id: 2, name: 'Prawn Pasta', image: 'https://images2.imgbox.com/c4/9a/90uc0H2z_o.jpg' },
    { id: 3, name: 'Embakebka', image: 'https://images2.imgbox.com/79/87/MAPWT7v9_o.png' },
    { id: 4, name: 'Rice and Lamb', image: 'https://images2.imgbox.com/3c/8b/jfeOzSaa_o.jpg' },
    { id: 5, name: 'Rushda', image: 'https://images2.imgbox.com/ac/76/EVxDkMfO_o.png' },
    { id: 6, name: 'Lentil Soup', image: 'https://images2.imgbox.com/75/6a/wLUvmgQO_o.png' },
    { id: 7, name: 'Mahashee', image: 'https://images2.imgbox.com/90/4f/hpFrTN0i_o.png' },
    { id: 8, name: 'Rice and Lamb', image: 'https://images2.imgbox.com/c4/9a/90uc0H2z_o.jpg' },
    { id: 9, name: 'CousCous', image: 'https://thumbs2.imgbox.com/03/d4/sfEMU2a3_t.jpeg' },
    { id: 10, name: 'Prawn Pasta', image: 'https://images2.imgbox.com/c4/9a/90uc0H2z_o.jpg' },
    { id: 11, name: 'Embakebka', image: 'https://images2.imgbox.com/c4/9a/90uc0H2z_o.jpg' },
    { id: 12, name: 'Rice and Lamb', image: 'https://images2.imgbox.com/c4/9a/90uc0H2z_o.jpg' },
  ]);
  

  const shuffleDishes = () => {
    const shuffled = [...dishes].sort(() => Math.random() - 0.5); // Shuffle array
    setDishes(shuffled); // Update state
  };

  return (
    <div className="app">
      <Header
        appName="Tasty Tiles"
        logo="https://images2.imgbox.com/a0/74/p5IZbQ62_o.png" // Replace with your actual logo URL
      />
      <div
        style={{
          display: 'grid',
          gap: '16px',
          gridTemplateColumns: 'repeat(auto-fill, minmax(345px, 1fr))',
          padding: '16px',
        }}
      ></div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px',
          marginTop: '64px', // Match the height of the header
        }}
      >
        <Typography variant="h4" sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold' }}>
          What's for Dinner?
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={shuffleDishes}
        >
          <Typography variant="body1" sx={{ marginRight: '8px', color: '#ff5722' }}>
            Shuffle
          </Typography>
          <ShuffleIcon sx={{ fontSize: '36px', color: '#ff5722' }} />
        </Box>
      </Box>
      <TileList dishes={dishes} />
    </div>
  );
};

export default App;



