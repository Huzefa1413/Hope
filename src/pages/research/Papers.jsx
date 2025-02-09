import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { papers } from "../../data/data";

const Papers = () => {
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
