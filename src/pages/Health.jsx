import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import health from '../assets/health.png';
import education from '../assets/education.png';
import vocational from '../assets/vocational.png';
import women from '../assets/women.png';
import emergency from '../assets/emergency.png';
import development from '../assets/development.png';

const Health = () => {
  const healthloop = [
    {
      logo: health,
      description:
        'A multi purpose HOPE Community Center has been constructed in Zia Colony, Korangi Karachi with the assistance from the Japanese Embassy Grass Root Assistance (GRA) Programme.',
      name: 'Karachi Hospital',
    },
    {
      logo: education,
      description:
        'Maternal and Child health Centers have been established in Manzoor Colony, Mujahid Colony and Bilal Colony where ante – natal care is provided to mothers.',
      name: 'Maternal Child Center',
    },
    {
      logo: vocational,
      description:
        'HOPE, in collaboration with Asia Petroleum, started a Basic Health Unit in the HUB area in August 2010. The Health Center is located in a poor area.',
      name: 'Basic Health Unit in Hub',
    },
    {
      logo: women,
      description:
        'By opening a Basic Health Unit (BHU) in Sujawal, a village located in interior Sindh, HOPE is once again fulfilling its motto of “reaching out where no one reaches”. This BHU was set up with the generous support of the Citibank.',
      name: 'Basic Health Unit in Sujawal',
    },
    {
      logo: emergency,
      description:
        'To cater the much needed health care facilities in the underprivileged areas of Karachi, HOPE organizes a weekly mobile medical camp that covers as many as 26 Goths on a rotational basis.',
      name: 'Mobile Health Unit (MHU)',
    },
    {
      logo: development,
      description:
        'HOPE began a nutrition support programme with UNICEF in October 2010 as part of its flood relief campaign. The project has now been extended for a year. This nutrition project targets the under-privileged population in Karachi, Thatta, Dadu and Shahdad Kot.',
      name: 'Nutrition 2010 - 2011',
    },
    {
      logo: development,
      description:
        'HOPE has signed a distributorship agreement with Procter & Gamble Company (P&G) for the latter’s PuR brand of water purification system.',
      name: 'P&G Purifier of Water Distribution',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="main container text-center py-5">
        <h1 className="pt-5">Health</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum aut
          labore
        </p>
        {healthloop.map((card, index) => (
          <>
            <div className="blog-card py-3" key={index}>
              <div className="image-container">
                <img src={card.logo} alt="Travel" />
              </div>
              <div className="content">
                <h2>{card.name}</h2>
                <p>{card.description}</p>
                <a href="#" className="read-more">
                  Read More <i class="fa-solid fa-angle-right"></i>
                </a>
              </div>
            </div>
            <hr />
          </>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Health;
