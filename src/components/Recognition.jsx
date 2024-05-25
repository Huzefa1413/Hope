import React from 'react';
import left from '../assets/dr.mubina-agboatwalla-chairperson-hope.png';
import right from '../assets/mubina-agboatwala-dr-arif-alvi.jpg';
const Recognition = () => {
  return (
    <div className="recognition">
      <h1>Recognition of HOPE</h1>
      <div>
        <div className="left">
          <img src={left} alt="" />
        </div>
        <div className="right">
          <img src={right} alt="" />
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
