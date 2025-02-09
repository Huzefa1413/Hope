import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { publications } from '../../data/data';

const Publications = () => {

  return (
    <>
      <Navbar />
      <div className="scientist-container py-5 mt-5">
        <h1 className="scientist-heading">Research Publications</h1>
        <ul className="blog-features">
          {publications.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Publications;
