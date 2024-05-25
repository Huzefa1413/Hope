import React from 'react';
import Navbar from '../components/Navbar';
import IntroVideo from '../assets/IntroVideo.mp4';
import Impact from '../components/Impact';
import Hope from '../components/Hope';
import Recognition from '../components/Recognition';
import Footer from '../components/Footer';
const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="video">
        <video src={IntroVideo} autoPlay muted loop></video>
        <div className="overlay"></div>
      </div>
      <Impact />
      <Hope />
      <Recognition />
      <Footer />
    </>
  );
};

export default Homepage;
