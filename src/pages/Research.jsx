import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import research from '../assets/research.jpeg';

const Research = () => {
  const researchItems = [
    { title: 'Papers', link: 'papers', img: research },
    { title: 'Projects', link: 'projects', img: research },
    { title: 'Publications', link: 'publications', img: research },
    { title: 'Scientists', link: 'scientists', img: research },
  ];

  return (
    <>
      <Navbar />
      <div className="main container text-center py-5">
        <h1 className="my-5">Research</h1>
        <div className="row">
          {researchItems.map((item, index) => (
            <div className="col-md-6 col-sm-12" key={index}>
              <div className="research-card">
                <Link to={item.link}>
                  <img src={item.img} alt={item.title} />
                  <h2>{item.title}</h2>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Research;
