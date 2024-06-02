import React from 'react';
import './styles/Collaborations.css';

import img1 from '../assets/row-1-column-1.png';
import img2 from '../assets/row-2-column-1.png';
import img3 from '../assets/row-3-column-1.png';
import img4 from '../assets/row-4-column-1.png';

const Collaborations = () => {
  return (
    <div className="collaborations container py-5 text-center">
      <h1>Major Collaborations</h1>
      <marquee behavior="" direction="">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </marquee>
    </div>
  );
};

export default Collaborations;
