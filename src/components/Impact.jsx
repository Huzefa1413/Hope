import React from "react";
import ImpactCard from "./ImpactCard";
import {impact_cards} from '../data/data'

import "./styles/Impact.css";

const Impact = () => {
  return (
    <div className="impact container text-center py-5">
      <h1>Our Impact</h1>
      <p>Help End Poverty in Pakistan</p>
      <div className="row justify-content-center">
        {impact_cards.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <ImpactCard info={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Impact;
