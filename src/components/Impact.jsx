import React from 'react';
import ImpactCard from './ImpactCard';
import health from '../assets/health.svg';
import education from '../assets/education.svg';
import vocational from '../assets/vocational.svg';
import aqua from '../assets/aqua.svg';
import emergency from '../assets/emergency.svg';
import './styles/Impact.css';

const Impact = () => {
  const impact_cards = [
    { logo: health, name: 'Health Care', count: 550000 },
    { logo: education, name: 'Education', count: 13000 },
    { logo: vocational, name: 'Vocational Training', count: 15000 },
    { logo: aqua, name: 'Aqua Project', count: 130000 },
    { logo: emergency, name: 'Emergency Relief', count: 500000 },
  ];

  return (
    <div className="impact container text-center py-5">
      <h1>Our Impact</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum aut labore
      </p>
      <div className="row justify-content-center">
        {impact_cards.slice(0, 3).map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <ImpactCard info={card} />
          </div>
        ))}
      </div>
      <div className="row justify-content-center">
        {impact_cards.slice(3).map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <ImpactCard info={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Impact;
