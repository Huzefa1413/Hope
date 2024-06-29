import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Papers = () => {
  const papers = [
    {
      title:
        "Gender Perspectives in Knowledge, Attitudes and practices concerning Tuberculosis in Pakistan's Sindh Province",
      owner: 'Hope',
      date: '07/17/2011',
    },
    {
      title: 'Field Trial of a Low Cost Method to Evaluate Hand Cleanliness',
      owner: 'Hope',
      date: '07/17/2011',
    },
    {
      title:
        'Emro/Tdr Small Grants Scheme for Operational Research in Tropical and Other Communicable Disease',
      owner: 'Hope',
      date: '07/17/2011',
    },
    {
      title:
        'To assess the Extent of Absenteeism in the Health Sector in Pakistan',
      owner: 'Hope',
      date: '07/17/2011',
    },
    {
      title:
        "The Role of Ngo's And Cbo's In Neutralizing the Socio-Behavioral Hindrances Leading to  Stigmatization of TB",
      owner: 'Hope',
      date: '07/17/2011',
    },
    {
      title:
        'The Effect of Antibacterial Soap on Impetigo Incidence, Karachi, Pakistan',
      owner: 'Hope',
      date: '07/17/2011',
    },
    {
      title:
        'Effect of Intensive Hand washing Promotion on Childhood Diarrhea in in High-Risk Communities in Pakistan.',
      owner: 'Hope',
      date: '07/17/2011',
    },
    {
      title:
        'Combining Drinking Water Treatment and Hand Washing For Diarrhea Prevention, a Cluster Randomized Controlled Trail',
      owner: 'Hope',
      date: '07/17/2011',
    },
    {
      title:
        'Case-Finding in Tuberculosis Patients Dignostic and Treatment Delaays and Thier Determinants in Pakistan',
      owner: 'Hope',
      date: '07/17/2011',
    },
    {
      title:
        'A Pilot intervention to improve Injection  Practices in the Informal Sector in Karachi, Pakistan',
      owner: 'Hope',
      date: '07/17/2011',
    },
    {
      title:
        'Effect of Hand waashing on child Health: A Randomized Controled Trail',
      owner: 'Hope',
      date: '07/17/2011',
    },
    {
      title:
        'Difficulties in Maintaing Improved Handwashing Behaviour, Karachi, Pakistan',
      owner: 'Hope',
      date: '07/17/2011',
    },
    {
      title:
        'Community Involment in Enhancing case Detection and Treatment Success Rates of Tuberculosists Patients under Dots Strategy',
      owner: 'Hope',
      date: '07/17/2011',
    },
  ];
  return (
    <>
      <Navbar />
      <div className="main container text-center py-5">
        <h1 className="py-5">Research Papers</h1>
        {papers.map((paper, index) => (
          <div key={index}>
            <div className="paper-card">
              <div>
                <h1>{paper.title}</h1>
                <div>
                  <h3>{paper.owner}</h3>
                  <h3>{paper.date}</h3>
                </div>
              </div>
              <button>Download</button>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Papers;
