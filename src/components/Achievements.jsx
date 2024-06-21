import React from 'react';
import './styles/Achievements.css';
import achievement1 from '../assets/achievement-thubmnail-1.png';
import achievement2 from '../assets/achievement-thubmnail-2.png';
import achievement3 from '../assets/achievement-thubmnail-3.png';
import achievement4 from '../assets/achievement-thubmnail-4.png';
import achievement5 from '../assets/achievement-thubmnail-5.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';

const Achievements = () => {
  const achievementsData = [
    {
      imgSrc: achievement1,
      description:
        'Our Northern Areas School Network consists of 35 plus registered semi formal schools, providing education in the areas of Thotha, Malsi, Dhanibaklan, Banilanryal, Parhour, Darabatangi, Habibdori (Chnari), Dakhankarbani etc.',
    },
    {
      imgSrc: achievement2,
      description:
        'HOPE has 3 formal Schools, located throughout Pakistan, where 1500 + students are studying.',
    },
    {
      imgSrc: achievement3,
      description:
        '52 health facilities monitored in earthquake affected areas in AJK.',
    },
    {
      imgSrc: achievement4,
      description:
        'HOPE has provided 422,754,120 liters of clean drinking water, in collaboration with P&G “Pak Saaf Pakistan” Project. ',
    },
    {
      imgSrc: achievement5,
      description:
        'Around 58,000 patients were seen and 85 delivers were conducted in both MCH center in Manzoor Colony and Mujahid Colony.',
    },
  ];

  return (
    <div className="achievements container py-5 text-center">
      <h1>What We Have Achieved</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
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
                <p>{achievement.description}</p>
                {/* <button>Read More</button> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Achievements;
