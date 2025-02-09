import React from "react";
import left from "../assets/Homepage/dr.mubina-agboatwalla-chairperson-hope.png";
import right from "../assets/Homepage/mubina-agboatwala-dr-arif-alvi.jpg";
import "./styles/Recognition.css";

const Recognition = () => {
  return (
    <div className="recognition container py-5 text-center">
      <h1>Honorable Mentions:</h1>
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
            In 2021, <span className="name">HOPE</span> was awarded a medal for our poverty alleviation
            efforts by <span className="pres">Pakistan President Arif Alvi</span> - we were 1 of only 2
            organizations to receive this honor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recognition;
