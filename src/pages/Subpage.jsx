import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation, useNavigate } from 'react-router-dom';

import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Subpage = () => {
  const location = useLocation();
  const subpage = location.state?.subpage;
  const navigate = useNavigate();

  const handleReadMore = (link, blog) => {
    navigate(`${link}`, { state: { blog } });
  };

  return (
    <>
      <Navbar />
      <div className="main container text-center py-5">
        <h1 className="pt-5">{subpage.heading}</h1>
        <p>{subpage.description}</p>
        {subpage.loop.map((item, index) => (
          <>
            <div className="blog-card py-3" key={index}>
              <div className="image-container">
                <img src={item.logo} alt="Travel" />
              </div>
              <div className="content">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <h3
                  onClick={() => handleReadMore(item.link, item.blog)}
                  className="read-more"
                >
                  Read More <FontAwesomeIcon icon={faAngleRight} />
                </h3>
              </div>
            </div>
            <hr />
          </>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Subpage;
