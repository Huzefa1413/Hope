import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import missionImg from "../assets/development.png"; // Replace with the correct path to your default image

const newsItems = [
  {
    title:
      "HOPE Teams up with the Lions Club - Facility Visit to Bring Eyeglasses 👓 to Patients at Zia Colony Hospital 🏥 and Meet School Children 👩🏻‍🎓",
    description: "",
    image: missionImg,
  },
  {
    title: "Giving Tuesday - the Benefits ✨ of Giving Charity",
    description: "",
    image: missionImg,
  },
  {
    title:
      "HOPE Joins Forces 🤝 with Revive Environment 🌳 and GlobalGiving to Bring Low-Cost, Sustainable Wood Stoves 🪵 to 480,000 Flood Affectees Following the 2022 Pakistan 🇵🇰 Flood Crisis 🌊",
    description: "",
    image: missionImg,
  },
  {
    title: "Visit to HOPE Schools",
    description:
      "Team HOPE visited HOPE Schools, AJK for monitoring purpose and distributed sweaters, stationery items, food items and gift hampers donated by Fahim School System among the students.",
    image: missionImg,
  },
  {
    title: "Distributed 5000 Iftar Boxes – Ramadan 2020",
    description:
      "Team HOPE has distributed 5000 Iftar Boxes during Ramadan till date, among the underprivileged communities of the society; Iftari is also distributed in the adjoining rurals. The team will continue to distribute Iftar and Biryani boxes till the end of Ramadan. These people were delighted to receive the iftar boxes, as they belong to the low-income class who cannot afford to enjoy eating a good Iftar like we do. The smile on the faces of these children is priceless.",
    image: missionImg,
  },
  {
    title: "Distribution of 2000 ration bags",
    description:
      "HOPE team has also been distributing ration to the needy families. So far, the team has distributed 2000 ration bags till date, in urban slums as well as outskirts of Karachi among the needy families, the team will continue distributing ration bags in order to keep their kitchens running. The families were delighted to receive the ration bags as they cannot even afford to buy basic groceries. Seeing the contentment on the faces of these people was extremely gratifying.",
    image: missionImg,
  },
  {
    title: "",
    description: "",
    image: missionImg,
  },
  {
    title: "",
    description: "",
    image: missionImg,
  },
];

const LatestNews = () => {
  return (
    <>
      <Navbar />
      <div className="about-us-container container">
        {newsItems.map((news, index) => (
          <section className="my-5" key={index}>
            <div className="row align-items-center my-4">
              {index % 2 === 0 ? (
                <>
                  <div className="col-md-7 text-center">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="img-square"
                    />
                  </div>
                  <div className="col-md-5 mission news">
                    <h2 className="mb-4">{news.title}</h2>
                    <p>{news.description}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-5 mission news">
                    <h2 className="mb-4">{news.title}</h2>
                    <p>{news.description}</p>
                  </div>
                  <div className="col-md-7 text-center">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="img-square"
                    />
                  </div>
                </>
              )}
            </div>
          </section>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default LatestNews;
