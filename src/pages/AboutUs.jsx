import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import DrMubinaImg from "../assets/About/dr-mubina-agboatwala.png";
import DrTariqImg from "../assets/About/dr-tariq-niazi.png";
import DrKhalidImg from "../assets/About/dr-khalid-omer.png";

import PersonImg0 from "../assets/About/kassim-0.png";
import PersonImg1 from "../assets/About/suleman-1.png";
import PersonImg2 from "../assets/About/saira-2.png";
import PersonImg3 from "../assets/About/reema-3.png";
import PersonImg4 from "../assets/About/fozia-4.png";
import PersonImg5 from "../assets/About/irum-5.png";
import PersonImg6 from "../assets/About/shahida-6.png";
import PersonImg7 from "../assets/About/ismail-7.png";
import PersonImg8 from "../assets/About/jamil-8.png";
import PersonImg9 from "../assets/About/imran-9.png";
import PersonImg10 from "../assets/About/afshan-10.png";
import PersonImg11 from "../assets/About/tahira-11.png";
import PersonImg12 from "../assets/About/ismat-12.png";
import PersonImg13 from "../assets/About/bilal-13.png";
import PersonImg14 from "../assets/About/adnan-14.png";
import PersonImg15 from "../assets/About/ayesha-15.png";
import PersonImg16 from "../assets/About/abida-16.png";
import PersonImg17 from "../assets/About/maria-17.png";
import PersonImg18 from "../assets/About/zameer-18.png";
import PersonImg19 from "../assets/About/quratulain-19.png";
import PersonImg20 from "../assets/About/rehana-20.png";
import PersonImg21 from "../assets/About/zahida-21.png";
import PersonImg22 from "../assets/About/badar-22.png";
import PersonImg23 from "../assets/About/salma-23.png";

import Mubina from "../assets/About/mubina.png";
import Nasar from "../assets/About/nasar.png";
import Ambreen from "../assets/About/ambereen.png";
import Qaisar from "../assets/About/qaisar.png";
import Naveen from "../assets/About/naveen.png";

import missionImg from "../assets/About/mission.png";
import visionImg from "../assets/About/vision.png";
import storyImg from "../assets/About/story.png";

const AboutUs = () => {
  const peopleBehindHope = [
    { name: "Mr. Kassim Agboatwalla", img: PersonImg0 },
    { name: "Mr. Suleman Agboatwalla", img: PersonImg1 },
    { name: "Ms. Saira Sarwar", img: PersonImg2 },
    { name: "Ms. Reema Gillani", img: PersonImg3 },
    { name: "Ms. Fozia Rizwan", img: PersonImg4 },
    { name: "Mrs. Syeda Irum Bukhari", img: PersonImg5 },
    { name: "Mrs. Shahida Hamid", img: PersonImg6 },
    { name: "Mr. M.Ismail Memon", img: PersonImg7 },
    { name: "Mr. Jamil Rana", img: PersonImg8 },
    { name: "Mr. Imran Ahmed", img: PersonImg9 },
    { name: "Dr. Afshan", img: PersonImg10 },
    { name: "Dr. Tahira", img: PersonImg11 },
    { name: "Ms. Ismat Asad Ali", img: PersonImg12 },
    { name: "Mr. Bilal Qureshi", img: PersonImg13 },
    { name: "Mr. Adnan Ahmed", img: PersonImg14 },
    { name: "Ms. Ayesha", img: PersonImg15 },
    { name: "Dr. Abida", img: PersonImg16 },
    { name: "Dr. Maria Tariq", img: PersonImg17 },
    { name: "Ms. Zameer un Nisa", img: PersonImg18 },
    { name: "Ms. Quratulain Thalho", img: PersonImg19 },
    { name: "Dr.Rehana", img: PersonImg20 },
    { name: "Ms. Zahida Khanum", img: PersonImg21 },
    { name: "Ms. Badar un Nisa", img: PersonImg22 },
    { name: "Ms. Salma", img: PersonImg23 },
  ];
  const teamMembers = [
    {
      name: "Dr. Mubina Agboatwalla",
      title: "Founder and Chairperson",
      img: Mubina,
      info: "Dr. Mubina is a seasoned pediatrician who is the visionary behind HOPE.  She founded the NGO in 1998 while studying in Dow Medical School in Karachi, Pakistan.  With the support of a group of passionate volunteers dedicated to bringing literacy and health to the neglected urban slums of Karachi, Dr. Mubina propelled the organization to one that encompasses a multi-pronged approach towards poverty alleviation in Pakistan.  Under Dr. Mubina's direction, HOPE has made a significant footprint in humanitarian aid in all regions of Pakistan, with an annual beneficiary count approaching 1,000,000 needy people, 70% of whom are women and children.",
    },
    {
      name: "Nasar Agboatwala",
      title: "President",
      img: Nasar,
      info: "In addition to having a separate career, Nasar Agboatwala dedicates his spare time to serving as a volunteer President of HOPE USA.  A graduate of UC Berkeley's Haas School of Business, Nasar has contributed immensely to HOPE USA's growth and development.  His contributions to HOPE USA have been numerous, including donor engagement, key collaborations, and marketing efforts.  Nasar's passion for HOPE USA is readily apparent in his various trips to Pakistan in which he has visited several HOPE facilities firsthand in order to relay his experiences back to our supporters.  Alongside his HOPE duties, Nasar has been actively engaged in local community service for local Bay Area, California weekend Islamic schools.",
    },
    {
      name: "Ambereen Siddiqui",
      title: "Director",
      img: Ambreen,
      info: "Ambereen Siddiqui's passion is HOPE USA.  A full-time volunteer, she devotes her time to the nitty gritty aspects of managing HOPE USA on a daily basis, along with broad concepts for future growth and sustainability.  A graduate of UC Berkeley's Haas School of Business, Ambereen has taken both a theoretical as well as practical aspect to her philosophy of HOPE USA's direction.  Her primary focus entails marketing, social media, engagement with donors, website design, and overall project management.   Ambereen aims to maximize funds going to the poor, adhere to strict feedback standards, enhance the donor experience, all while making HOPE USA a recognized charity worldwide.",
    },
    {
      name: "Qaisar Shareef",
      title: "Board Member",
      img: Qaisar,
      info: "Qaisar Shareef has been an integral and transformational component of HOPE USA's growth.  During his time as head of Procter & Gamble Pakistan, Qaisar carefully vetted HOPE USA, qualifying us to be one of the only NGO partners with the company, and thus paving the way for an incredible corporate partnership which spans many avenues of HOPE USA's work.  Qaisar is a well-published author, contributor to Gulf news, and serves on the boards of several nonprofits working towards humanitarian causes, as well as the Executive Committee of US Pakistan Foundation.  He has faith in HOPE USA's work and has seen the inspirational impact we have had in Pakistan from our inception.",
    },
    {
      name: "Naveen Khan",
      title: "Secretary",
      img: Naveen,
      info: "Naveen Khan serves as HOPE USA's Secretary and has devoted her spare time and efforts towards furthering HOPE USA's work.  As a graduate of San Francisco State University, her background in Public Health is a vital asset to HOPE USA's focus on bringing healthcare to the poor.  Naveen has always made it a priority to volunteer at various organizations throughout her life.  She is always available to step in and help propel a new project forward and especially maximize funds going towards underserved communities.",
    },
  ];
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
