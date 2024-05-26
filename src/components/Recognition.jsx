import React from 'react';
import left from '../assets/dr.mubina-agboatwalla-chairperson-hope.png';
import right from '../assets/mubina-agboatwala-dr-arif-alvi.jpg';
import './styles/Recognition.css';

const Recognition = () => {
  return (
    <div className="recognition container py-5 text-center">
      <h1>Recognition of HOPE</h1>
      <div className="row mt-5">
        <div className="col-lg-6 col-md-12 mb-4">
          <img src={left} alt="Dr. Mubina Agboatwalla" className="img-fluid" />
        </div>
        <div className="col-lg-6 col-md-12">
          <img
            src={right}
            alt="Award Ceremony"
            className="img-fluid w-100 mb-3"
          />
          <p>
            An award has been honored.{' '}
            <span className="name">Dr. Mubina Agboatwalla</span> is receiving a
            certificate from{' '}
            <span className="pres">Arif Alvi, President of Pakistan</span> at{' '}
            <span className="pres">AERONS event</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recognition;
