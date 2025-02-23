// Loader.js
import React from 'react';
import './styles/Loader.css'; // You can style this loader using CSS

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
