import React from "react";
import "./styles/Achievements.css";
import { achievementsData } from "../data/data";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";

const Achievements = () => {


  return (
    <div className="achievements container py-5 text-center">
      <h1>Our Work</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        navigation
        autoplay={{ delay: 3000 }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className="swiper_container"
      >
        {achievementsData.map((achievement, index) => (
          <SwiperSlide key={index} className="item">
            <div
              className="item-content"
              style={{ backgroundImage: `url(${achievement.imgSrc})` }}
            >
              <div className="text-content">
                <p><b>{achievement.heading}:</b> {achievement.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Achievements;
