import React from 'react';
import ImpactCard from './ImpactCard';
import health from '../assets/health.svg';
import education from '../assets/education.svg';
import vocational from '../assets/vocational.svg';
import aqua from '../assets/aqua.svg';
import emergency from '../assets/emergency.svg';

import emergencyimg from '../assets/emergency.png';
import './styles/Impact.css';

const Impact = () => {
  const impact_cards = [
    {
      logo: health,
      name: 'Health Care',
      count: 550000,
      link: 'health_care',
      subpage: {
        heading: 'Health Care',
        para1:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum aut labore',
        para2:
          'lorejdaihafihia afhofahfaifa aohfiifajafiofa afoanfaonafnfaiafnafo',
        subheading: 'Emergency',
        img: emergencyimg,
      },
    },
    {
      logo: education,
      name: 'Education',
      count: 13000,
      link: 'education',
      subpage: {
        heading: 'Education',
        para1:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum aut labore',
        para2:
          'lorejdaihafihia afhofahfaifa aohfiifajafiofa afoanfaonafnfaiafnafo',
        subheading: 'Emergency',
        img: emergencyimg,
      },
    },
    {
      logo: vocational,
      name: 'Vocational Training',
      count: 15000,
      link: 'vocational_training',
      subpage: {
        heading: 'Vocational Training',
        para1:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum aut labore',
        para2:
          'lorejdaihafihia afhofahfaifa aohfiifajafiofa afoanfaonafnfaiafnafo',
        subheading: 'Emergency',
        img: emergencyimg,
      },
    },
    {
      logo: aqua,
      name: 'Aqua Project',
      count: 130000,
      link: 'aqua_project',
      subpage: {
        heading: 'Aqua Project',
        para1:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum aut labore',
        para2:
          'lorejdaihafihia afhofahfaifa aohfiifajafiofa afoanfaonafnfaiafnafo',
        subheading: 'Emergency',
        img: emergencyimg,
      },
    },
    {
      logo: emergency,
      name: 'Emergency Relief',
      count: 500000,
      link: 'emergency_relief',
      subpage: {
        heading: 'Emergency Relief',
        para1:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum aut labore',
        para2:
          'lorejdaihafihia afhofahfaifa aohfiifajafiofa afoanfaonafnfaiafnafo',
        subheading: 'Emergency',
        img: emergencyimg,
      },
    },
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
