import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import DrMubinaImg from "../assets/About/dr-mubina-agboatwala.png";
import DrTariqImg from "../assets/About/dr-tariq-niazi.png";
import DrKhalidImg from "../assets/About/dr-khalid-omer.png";

import missionImg from "../assets/About/mission.png";
import visionImg from "../assets/About/vision.png";
import storyImg from "../assets/About/story.png";

import {peopleBehindHope, teamMembers} from "../data/data"

const AboutUs = () => {

  return (
    <>
      <Navbar />
      <div className="about-us-container container">
        <section className="my-5">
          <div className="row align-items-center my-4">
            <div className="col-md-7 text-center">
              <img src={missionImg} alt="Mission" className="img-square" />
            </div>
            <div className="col-md-5 mission">
              <h2 className="mb-4">Mission</h2>
              <p>
                HOPE's Mission is a Society in Which All Citizens Have Access to
                Health and Educational Opportunities as Basic Human Rights.
              </p>
            </div>
          </div>
        </section>

        <section className="my-5">
          <div className="row align-items-center my-4">
            <div className="col-md-5 mission">
              <h2 className="mb-4">Vision</h2>
              <p>
                HOPE's Vision is to End Poverty in Pakistan by Empowering Women
                and Children to Their Greatest Potentials.
              </p>
            </div>
            <div className="col-md-7 text-center">
              <img src={visionImg} alt="Vision" className="img-square" />
            </div>
          </div>
        </section>

        <section className="my-5">
          <div className="row align-items-center my-4">
            <div className="col-md-7 text-center">
              <img src={storyImg} alt="Story" className="img-square" />
            </div>
            <div className="col-md-5 mission">
              <h2 className="mb-4">Story</h2>
              <p>
                HOPE Charities USA is a volunteer-based nonprofit 501(c)(3)
                charitable organization working to better the socioeconomic
                forefront of impoverished citizens in Pakistan. HOPE USA’s
                mission is to end poverty in Pakistan through a calculated,
                multi-pronged interventional approach which focuses on
                Healthcare, Education, Vocational Training, Clean Water, and
                Disaster Relief.
              </p>
            </div>
          </div>
        </section>

        <section className="my-5 board-of-directors-section">
          <h2 className="text-center my-5">Board of Directors</h2>

          <div className="board-member">
            <img
              src={DrMubinaImg}
              alt="Dr. Mubina Agboatwalla"
              className="board-member-img"
            />
            <div className="board-member-info">
              <p>
                <strong>Dr. Mubina Agboatwalla - Chairperson</strong>
              </p>
              <p>
                Dr. Mubina Agboatwalla, the visionary behind HOPE, founded the
                NGO in 1997 with a group of dedicated workers committed to
                bringing literacy and health to the neglected urban slums of
                Karachi while working at the grassroots level. Under her
                direction, HOPE has established two community centers, two
                hospitals and several informal schools in Karachi and Thatta.
                Dr. Mubina Agboatwalla is Assistant Professor, Dept. of
                Community Health Sciences, at the Aga Khan University Hospital
                besides working as a Consultant Pediatrician in various Karachi
                Hospitals. She is a well-known researcher and has contributed to
                numerous Indexed international medical journals. She also writes
                for various national newspapers including Dawn, Jang etc.
              </p>
            </div>
          </div>
          <div className="board-member">
            <img
              src={DrTariqImg}
              alt="Dr. Mubina Agboatwalla"
              className="board-member-img"
            />
            <div className="board-member-info">
              <p>
                <strong>Mr Tariq Niazi - Director</strong>
              </p>
              <p>
                Mr. Tariq Niazi has been involved in HOPE since its inception.
                He is one of the three founder members and a Director HOPE,
                General Secretary and Member of Executive Committee. He is
                especially involved with HOPE’s social marketing programs,
                educational programs, Research Studies, Information Technology
                Services, Data Base Management, and New Projects Development In
                addition to his close involvement with the HOPE at the executive
                level he enjoys significant work experience in technology
                marketing, general management, business development, human
                resource management, and financial controls. Headed large
                Computers, IT based and Communication companies in the last 10
                years in Pakistan, introduced leading products and services,
                which reached to pinnacle in their respective usage and some of
                them still are industry leader in their respective area. He
                conducts corporate trainings on regular basis. In addition to
                professional commitments Mr. Niazi is teaching and imparting
                training since 1994, in South Eastern University – Karachi
                Campus and at Greenwich University. His subjects of interest are
                Principle of Marketing, Advanced Marketing Management, Marketing
                Research & Analysis, System Analysis & Design, Sales Management,
                and Advanced Sales Management. He is dedicated to and find
                teaching and training assignments appealing and believe that IT
                is the responsibility of every educated person to involve
                himself in imparting knowledge for better development of
                society. He is an MBA and professionally trained in various
                business disciplines from Europe, USA, Australia and UAE. He has
                written various articles on Information Technology, and its
                impact in the third world and on e-government in Pakistan. He
                has almost 10 years Consultancy, Training & Development,
                Community Service Experience.
              </p>
            </div>
          </div>
          <div className="board-member">
            <img
              src={DrKhalidImg}
              alt="Dr. Mubina Agboatwalla"
              className="board-member-img"
            />
            <div className="board-member-info">
              <p>
                <strong>Dr Khalid Omer - Director</strong>
              </p>
              <p>
                Dr. Khalid Omer is one of the founding members of HOPE and has
                assisted in various technical aspects throughout the years. He
                has also served as a Treasurer and is currently on the Board of
                Directors. Dr. Khalid Omer deals with various data based
                research projects being conducted by HOPE as well as health
                advocacy campaigns. Dr. Khalid Omer is also the National
                Coordinator, CIET, Pakistan. He has previously worked as Health
                Consultant for UNICEF and Greenstar Social Marketing.EF and
                Greenstar Social Marketing.gboatwalla, the visionary behind
                HOPE, founded the NGO in 1997 with a group of dedicated workers
                committed to bringing literacy and health to the neglected urban
                slums of Karachi while working at the grassroots level. Under
                her direction, HOPE has established two community centers, two
                hospitals and several informal schools in Karachi and Thatta.
                Dr. Mubina Agboatwalla is Assistant Professor, Dept. of
                Community Health Sciences, at the Aga Khan University Hospital
                besides working as a Consultant Pediatrician in various Karachi
                Hospitals. She is a well-known researcher and has contributed to
                numerous Indexed international medical journals. She also writes
                for various national newspapers including Dawn, Jang etc.
              </p>
            </div>
          </div>
        </section>

        <section className="my-5">
          <h2 className="text-center my-5">Our Team</h2>
          <div className="row justify-content-center">
            {teamMembers.map((member, index) => (
              <div className="col-md-4 my-2" key={index}>
                <div className="card team-member-card h-100">
                  <img
                    src={member.img}
                    className="card-img-top"
                    alt={member.name}
                  />
                  <div className="card-body flex-grow-1">
                    <h5 className="card-title">{member.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {member.title}
                    </h6>
                    <p className="card-text">{member.info}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="my-5">
          <h2 className="text-center my-5">People behind HOPE</h2>
          <div className="row">
            {peopleBehindHope.map((person, index) => (
              <div className="col-sm-6 col-md-4 col-lg-2" key={index}>
                <div className="card person-card">
                  <img
                    src={person.img}
                    className="card-img-top"
                    alt={person.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{person.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
