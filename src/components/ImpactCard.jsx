import React from 'react';
const ImpactCard = (props) => {
  return (
    <div className="impact_card">
      <div className="logo">
        <img src={props.info.logo} alt="logo" />
      </div>
      <h1>{props.info.name}</h1>
      <p>{props.info.count}+ lives impacted</p>
    </div>
  );
};

export default ImpactCard;
