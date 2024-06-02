import React from 'react';
import Navbar from '../components/Navbar';
import IntroVideo from '../assets/IntroVideo.mp4';
import Impact from '../components/Impact';
import Hope from '../components/Hope';
import Recognition from '../components/Recognition';
import Footer from '../components/Footer';
import Achievements from '../components/Achievements';
import Collaborations from '../components/Collaborations';

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
      <Achievements />
      <Collaborations />
      <Footer />
    </>
  );
};

export default Homepage;
