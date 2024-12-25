import React from "react";
import Marquee from "react-fast-marquee";
import "./styles/Collaborations.css";
import img1 from "../assets/Collaboration/image1x1.png";
import img2 from "../assets/Collaboration/image1x2.png";
import img3 from "../assets/Collaboration/image1x3.png";
import img4 from "../assets/Collaboration/image1x4.png";
import img5 from "../assets/Collaboration/image2x1.png";
import img6 from "../assets/Collaboration/image2x2.png";
import img7 from "../assets/Collaboration/image2x3.png";
import img8 from "../assets/Collaboration/image2x4.png";
import img9 from "../assets/Collaboration/image3x1.png";
import img10 from "../assets/Collaboration/image3x2.png";
import img11 from "../assets/Collaboration/image3x3.png";
import img12 from "../assets/Collaboration/image3x4.png";
import img13 from "../assets/Collaboration/image4x1.png";
import img14 from "../assets/Collaboration/image4x2.png";
import img15 from "../assets/Collaboration/image4x3.png";
import img16 from "../assets/Collaboration/image4x4.png";
import img17 from "../assets/Collaboration/image5x1.png";
import img18 from "../assets/Collaboration/image5x2.png";
import img19 from "../assets/Collaboration/image5x3.png";
import img20 from "../assets/Collaboration/image5x4.png";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
];

const Collaborations = () => {
  return (
    <div className="collaborations container py-5 text-center">
      <h1>Major Collaborations</h1>
      <Marquee gradient={false} speed={200}>
        {images.map((img, index) => (
          <div key={index} className="marquee-item">
            <img src={img} alt={`Collaboration ${index + 1}`} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Collaborations;
