import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Projects = () => {
  const projects = [
    'In charge Network of Polio Clinics in Civil Hospital, Karachi, NICH Karachi and Sohrabgoth, Karachi. Centre for Rehabilitation of Children with Acute Paralytic Poliomyelitis',
    'Acute poliomyelitis: Subject of thesis for M.D',
    'Coordinator and President of Health Oriented Preventive Education (HOPE) an NGO working for Primary Health Care',
    'Project Director: “Measles Surveillance Project “A Project on Measles Surveillance in Sindh involving major hospitals and Katchi Abadies in Karachi. This involves measles surveillance, capacity building of EPI personnel and measles management. This also involves training of vaccinators, LHWs and medical officers. This is a UNICEF project',
    '“Vitamin A Supplementation Programme”. A Project involving Vitamin A Supplementation to children through Sentinel sites and community based activities in Sindh. Involves management of malnourished children as well as development of health education material',
    'Prevalence of Measles antibodies in vaccinated and unvaccinated children in Civil Hospital, Karachi. (Collaboration with Nagoya University, Japan)',
    'Acute, Watery Diarrhea, Viral Etiological Studies of Children with acute, watery diarrhea. (Collaboration with Nagoya, University, Japan)',
    'Co-Investigator: “Study on Combined OPV-eIPV Schedules in Karachi, Pakistan”. A collaborative study with Aga Khan University Hospital and Institute Meraux and Pastuer, to test the efficacy of eIPv for the prevention of Poliomyelitis',
    'Co-Investigator: “Microbiologic Evaluation and Community Acceptance of a Plastic Water Storage Vessel with Point of use Water Treatment and Hand washing in Karachi, Pakistan”. A collaborative study with the Aga Khan University Hospital, Procter and Gamble, CDC, Atlanta and HOPE. To determine the efficacy of safe drinking water and hand washing in the prevention of diarrhea',
    'Co- Investigator and Local Principal Investigator “ Search for Prolonged Excretion of Polioviruses and Primary Immunodeficiency Disorders in Pakistani Children” a collaborative study with Aga Khan University Hospital, John Hopkins School of Public health and HOPE. The study aims to study the excretion of polioviruses and immunological deficiencies in children with poliomyelitis and suspected immunodeficiency',
    'Co- Investigator: “ Lead Levels and Sources of Lead Among Children Living In and Near Karachi, Pakistan”., a collaborative study with Aga Khan University Hospital and World Health Organization (WHO). The study aims to evaluate lead levels in Pakistani children and the factors contributing to the high lead levels',
    'Principal Investigator: “Improving Access to EOC in Rural Sindh”, An Applied Intervention Research Project on reducing maternal deaths due to pregnancy related complications, in collaboration with The Asia Foundation',
    'Local Principal Investigator “Medicated Soap and Water Vessel Intervention Study” a collaborative study with CDC (Atlanta), Procter and Gamble (USA) and Aga Khan University Hospital. To determine the impact of a home based safe water system and medicated soap on impetigo and diarrhea incidence',
    'Co Investigator and Local Principal Investigator “Karachi Soap Health Outcome Study” a collaborative study with CDC (Atlanta), Procter and Gamble (USA) and Aga Khan University Hospital. To determine the impact of medicated soap in prevention of diarrhea and impetigo',
    'Principal Investigator “Gender Perspectives in Knowledge, Attitude and Practices Concerning Tuberculosis in Pakistan’s Sindh Province” a collaborative study with WHO (EMRO) and TB Control Programme GOS. A part of the TDR initiative in EMRO',
  ];
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
