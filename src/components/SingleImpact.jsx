import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./styles/SingleImpact.css";

const SingleImpact = () => {
  const location = useLocation();
  const subpage = location.state?.subpage;

  return (
    <>
      <Navbar />
      <div className="singleimpact-container py-5 mt-5">
        <h1 className="singleimpact-heading">{subpage.heading}</h1>
        <h3 className="singleimpact-subheading">{subpage.subheading}</h3>
        <p className="singleimpact-paragraph">{subpage.para1}</p>
        <p className="singleimpact-paragraph">{subpage.para2}</p>
        <img
          src={subpage.img}
          className="singleimpact-image"
          alt={subpage.heading}
        />
      </div>
      <Footer />
    </>
  );
};

export default SingleImpact;
