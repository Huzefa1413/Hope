import React from "react";
import mission from "../assets/Homepage/mission.svg";
import vision from "../assets/Homepage/vision.svg";
import chairperson from "../assets/Homepage/chairperson.png";
import "./styles/Hope.css";

const Hope = () => {
  return (
    <div className="hope container py-5">
      <div className="row mb-3">
        <div className="col-md-6">
          <h1>What is Hope?</h1>
          <p>
            Health Oriented Preventive Education is a non-governmental (NGO)
            organization dedicated to tackling poverty in rural and remote
            villages along with urban slum areas throughout Pakistan. Since
            1997, we have utilized a grassroots approach to ignite and fuel
            transformative change within underserved communities. Our
            humanitarian efforts rely upon a comprehensive, tried and true model
            of poverty alleviation which spans the following avenues:
            <ul>
              <li>Healthcare</li>
              <li>Education</li>
              <li>Vocational Training</li>
              <li>Clean Water</li>
              <li>Food Security</li>
              <li>Disaster Relief</li>
              <li>Ramadan Outreach</li>
              <li>Qurbani</li>
            </ul>
            Altogether, we operate a network of Healthcare facilities, Schools,
            and Vocational Centers which treat 900,000+ patients annually,
            educate 11,000+ children per year, and provide income-generating
            vocational training skills to 6,000+ young adults, all for
            free/nominal cost. 70% of our beneficiaries are women and children.
          </p>
        </div>
        <div className="col-md-6 d-flex flex-wrap justify-content-between">
          <div className="col-sm-6 mb-2 px-1">
            <img src={mission} alt="Mission" className="mb-3 icon-size" />
            <h3 className="text-primary">Our Mission:</h3>
            <p>
              To develop a society in which individuals are aware of the basic
              right & are provided with equal opportunities to access health and
              educational facilities.
            </p>
          </div>
          <div className="col-sm-6 mb-2 px-1">
            <img src={vision} alt="Vision" className="mb-3 icon-size" />
            <h3 className="text-primary">Our Vision:</h3>
            <p>
              A well educated and healthy society in which women and children
              have equal rights.
            </p>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-8">
          <h1>Our Story:</h1>
          <p>
            HOPE was the inspiration of Dr. Mubina Agboatwalla, a pediatrician
            by profession who helped eradicate polio from Pakistan in the early
            stages of her career. In 1997, while working in Karachi’s
            government-sponsored hospital for the needy, Civil Hospital, Dr.
            Mubina thought of a vision for the betterment of the citizens of her
            country. She and a small band of volunteers joined forces to
            establish HOPE as a nonprofit governmental organization in Pakistan.
          </p>
          <p>
            Due to Dr. Mubina's medical background, HOPE's initial objective was
            to provide the poor with better access to medical centers and
            hospitals. In a country grappling with basic issues such as lack of
            access to clean drinking water, poor maternal and infant health,
            malnutrition in children, prevention and treatment of diseases such
            as malaria, cholera, and tuberculosis, it already seemed as though
            HOPE had enough of a challenge on its hands. But soon Dr. Mubina
            realized that the cornerstone of a productive and forward-thinking
            community relies on both a healthy body and healthy mind. She honed
            her vision to an integrative approach that was twofold: Health and
            Education. Today, HOPE has evolved to an organization that
            prioritizes the health and education opportunities of underserved
            women and children in Pakistan. HOPE aims to empower women and
            children with quality education and health services so that they can
            harness their greatest potentials.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <img
            src={chairperson}
            alt="Chairperson"
            className="img-fluid chairperson-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Hope;
