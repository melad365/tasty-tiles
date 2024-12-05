import React from 'react';
import Tile from './Tile';
import './TileList.css'; // Create this file for styling.

const TileList = ({ dishes }) => {
  return (
    <div className="tile-list">
      {dishes.map((dish) => (
        <Tile key={dish.id} dish={dish} />
      ))}
    </div>
  );
};

export default TileList;
