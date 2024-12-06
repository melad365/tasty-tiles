import React from 'react';
import './tileList.css'; // Create this file for styling.
import Tile from './tile';

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
