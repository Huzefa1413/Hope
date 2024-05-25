import React from 'react';
import ImpactCard from './ImpactCard';
import health from '../assets/health.svg';
import education from '../assets/education.svg';
import vocational from '../assets/vocational.svg';
import aqua from '../assets/aqua.svg';
import emergency from '../assets/emergency.svg';

const Impact = () => {
  const impact_cards = [
    { logo: health, name: 'Health Care', count: 550000 },
    { logo: education, name: 'Education', count: 13000 },
    { logo: vocational, name: 'Vocational Training', count: 15000 },
    { logo: aqua, name: 'Aqua Project', count: 130000 },
    { logo: emergency, name: 'Emergency Relief', count: 500000 },
  ];
  return (
    <div className="impact">
      <h1>Our Impact</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum aut labore
      </p>
      <div className="impact_cards">
        {impact_cards.map((card) => (
          <ImpactCard info={card} />
        ))}
      </div>
    </div>
  );
};

export default Impact;
