import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import health from '../assets/health.png';
import education from '../assets/education.png';
import vocational from '../assets/vocational.png';
import women from '../assets/women.png';
import emergency from '../assets/emergency.png';
import development from '../assets/development.png';

const Whatwedo = () => {
  const whatwedo = [
    {
      logo: health,
      description: 'Lorem ipsum is description.',
      name: 'Hope Health',
    },
    {
      logo: education,
      description: 'Lorem ipsum is description.',
      name: 'Hope Education',
    },
    {
      logo: vocational,
      description: 'Lorem ipsum is description.',
      name: 'Vocational Services',
    },
    {
      logo: women,
      description: 'Lorem ipsum is description.',
      name: 'Hope Women',
    },
    {
      logo: emergency,
      description: 'Lorem ipsum is description.',
      name: 'Hope Emergencies',
    },
    {
      logo: development,
      description: 'Lorem ipsum is description.',
      name: 'Community Development',
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="main container text-center py-5">
        <h1 className="pt-5">What We Do?</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum aut
          labore
        </p>
        <div className="row">
          {whatwedo.map((card, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="h-100 text-center">
                <div className="custom-card">
                  <div className="custom-card-img-container">
                    <img
                      src={card.logo}
                      className="custom-card-img"
                      alt={card.name}
                    />
                  </div>
                  <div className="custom-card-body">
                    <p className="custom-card-title">{card.name}</p>
                    <p className="custom-card-description">
                      {card.description}
                    </p>
                    <button className="custom-card-button">Read More </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Whatwedo;
