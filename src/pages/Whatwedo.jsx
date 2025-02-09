import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { whatwedo } from '../data/data';
const Whatwedo = () => {
  const navigate = useNavigate();

  const handleReadMore = (link, subpage) => {
    navigate(`${link}`, { state: { subpage } });
  };

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
                    <button
                      className="custom-card-button"
                      onClick={() => handleReadMore(card.link, card.subpage)}
                    >
                      Read More
                    </button>
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
