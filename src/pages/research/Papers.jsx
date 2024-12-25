import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Papers = () => {
  const papers = [
    {
      title:
        "Gender Perspectives in Knowledge, Attitudes and practices concerning Tuberculosis in Pakistan's Sindh Province",
      owner: "Hope",
      date: "07/17/2011",
      link: "https://hope-ngo.com/wp-content/uploads/2020/03/genderperspectiveReport.pdf",
    },
    {
      title: "Field Trial of a Low Cost Method to Evaluate Hand Cleanliness",
      owner: "Hope",
      date: "07/17/2011",
      link: "https://hope-ngo.com/wp-content/uploads/2020/03/tmi_1847.pdf",
    },
    {
      title:
        "Emro/Tdr Small Grants Scheme for Operational Research in Tropical and Other Communicable Disease",
      owner: "Hope",
      date: "07/17/2011",
      link: "https://hope-ngo.com/wp-content/uploads/2020/03/Sehwan_study.pdf",
    },
    {
      title:
        "To assess the Extent of Absenteeism in the Health Sector in Pakistan",
      owner: "Hope",
      date: "07/17/2011",
      link: "https://hope-ngo.com/wp-content/uploads/2020/03/TAP_Survey_Report.pdf",
    },
    {
      title:
        "The Role of Ngo's And Cbo's In Neutralizing the Socio-Behavioral Hindrances Leading to  Stigmatization of TB",
      owner: "Hope",
      date: "07/17/2011",
      link: "https://hope-ngo.com/wp-content/uploads/2020/03/Thatta-TB-Report-5.pdf",
    },
    {
      title:
        "The Effect of Antibacterial Soap on Impetigo Incidence, Karachi, Pakistan",
      owner: "Hope",
      date: "07/17/2011",
      link: "https://hope-ngo.com/wp-content/uploads/2020/03/antibac_impetigo_incidence.pdf",
    },
    {
      title:
        "Effect of Intensive Hand washing Promotion on Childhood Diarrhea in in High-Risk Communities in Pakistan.",
      owner: "Hope",
      date: "07/17/2011",
      link: "https://hope-ngo.com/wp-content/uploads/2020/03/JAMA.pdf",
    },
    {
      title:
        "Combining Drinking Water Treatment and Hand Washing For Diarrhea Prevention, a Cluster Randomized Controlled Trail",
      owner: "Hope",
      date: "07/17/2011",
      link: "https://hope-ngo.com/wp-content/uploads/2020/03/tmi_1592.pdf",
    },
    {
      title:
        "Case-Finding in Tuberculosis Patients Dignostic and Treatment Delaays and Thier Determinants in Pakistan",
      owner: "Hope",
      date: "07/17/2011",
      link: "https://hope-ngo.com/wp-content/uploads/2020/03/tmi_1592-1.pdf",
    },
    {
      title:
        "A Pilot intervention to improve Injection  Practices in the Informal Sector in Karachi, Pakistan",
      owner: "Hope",
      date: "07/17/2011",
      link: "https://hope-ngo.com/wp-content/uploads/2020/03/SIG_Report2.pdf",
    },
    {
      title:
        "Effect of Hand waashing on child Health: A Randomized Controled Trail",
      owner: "Hope",
      date: "07/17/2011",
      link: "https://hope-ngo.com/wp-content/uploads/2020/03/SoapHealth-ARI-Lancet-Man-Report-3.pdf",
    },
    {
      title:
        "Difficulties in Maintaing Improved Handwashing Behaviour, Karachi, Pakistan",
      owner: "Hope",
      date: "07/17/2011",
      link: "https://hope-ngo.com/wp-content/uploads/2020/03/Khi_Handwashing_Follow-up_AJTMH_Man.pdf",
    },
    {
      title:
        "Community Involment in Enhancing case Detection and Treatment Success Rates of Tuberculosists Patients under Dots Strategy",
      owner: "Hope",
      date: "07/17/2011",
      link: "https://hope-ngo.com/wp-content/uploads/2020/03/BDN-Report-1.pdf",
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
              <a href={paper.link}>Download</a>
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
