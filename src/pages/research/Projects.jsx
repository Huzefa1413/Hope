import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { projects } from '../../data/data';

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="scientist-container py-5 mt-5">
        <h1 className="scientist-heading">Research Projects</h1>
        <ul className="blog-features">
          {projects.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
