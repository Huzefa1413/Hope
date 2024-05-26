import React from 'react';
import './styles/ImpactCard.css';

const ImpactCard = (props) => {
  return (
    <div className="impact_card h-100 text-center p-4">
      <div className="logo mx-auto mb-3">
        <img src={props.info.logo} alt="logo" />
      </div>
      <h1 className="h5">{props.info.name}</h1>
      <p className="text-muted">{props.info.count}+ lives impacted</p>
    </div>
  );
};

export default ImpactCard;
