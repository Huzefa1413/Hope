import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/ImpactCard.css";

const ImpactCard = (props) => {
  console.log(props.info.subpage);
  const navigate = useNavigate();

  const handleReadMore = (link, subpage) => {
    navigate(`${link}`, { state: { subpage } });
  };
  return (
    <div
      onClick={() => handleReadMore(props.info.link, props.info.subpage)}
      className="impact_card h-100 text-center p-4"
    >
      <div className="logo mx-auto mb-3">
        <img src={props.info.logo} alt="logo" />
      </div>
      <h1 className="h5">{props.info.name}</h1>
      <p className="text-muted">{props.info.count}<br/>{props.info?.count2}</p>
    </div>
  );
};

export default ImpactCard;
