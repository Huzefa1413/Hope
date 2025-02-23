import React from "react";
import Navbar from "../components/Navbar";

import IntroWeb from "../assets/Homepage/IntroWeb.mp4";
import IntroMobile from "../assets/Homepage/IntroMobile.mp4";

import Impact from "../components/Impact";
import Hope from "../components/Hope";
import Recognition from "../components/Recognition";
import Achievements from "../components/Achievements";
import Collaborations from "../components/Collaborations";
import BankDetails from "../components/BankDetails";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="video web">
        <video src={IntroWeb} autoPlay muted loop preload="auto"></video>
        <div className="overlay"></div>
      </div>
      <div className="video mobile">
        <video src={IntroMobile} autoPlay muted loop preload="auto"></video>
        <div className="overlay"></div>
      </div>
      <Impact />
      <Hope />
      <Recognition />
      <Achievements />
      <BankDetails />
      <Collaborations />
      <Footer />
    </>
  );
};

export default Homepage;
