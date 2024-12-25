import React from "react";
import ImpactCard from "./ImpactCard";

import health from "../assets/Impact/health.svg";
import education from "../assets/Impact/education.svg";
import vocational from "../assets/Impact/vocational.svg";
import aqua from "../assets/Impact/aqua.svg";
import emergency from "../assets/Impact/emergency.svg";
import food from "../assets/Impact/food.svg";
import ramazan from "../assets/Impact/ramazan.svg";
import qurbani from "../assets/Impact/qurbani.svg";

import healthMain from "../assets/Impact/health-mainpage.png";
import educationMain from "../assets/Impact/education-mainpage.png";
import vocationalMain from "../assets/Impact/vocational-mainpage.png";
import aquaMain from "../assets/Impact/aqua-mainpage.png";
import emergencyMain from "../assets/Impact/emergeny-mainpage.png";
import foodMain from "../assets/Impact/food-mainpage.png";
import ramadanMain from "../assets/Impact/ramadan-mainpage.png";
import qurbaniMain from "../assets/Impact/qurbani-mainpage.png";

import "./styles/Impact.css";

const Impact = () => {
  const impact_cards = [
    {
      logo: health,
      name: "Health Care",
      count: 750000,
      link: "health_care",
      subpage: {
        heading: "The Healthcare Crisis in Pakistan",
        subheading: "Beating the Odds",
        para1:
          "As an emerging nation, Pakistan faces multiple challenges when it comes to public health.  These are due primarily to a dearth of resources dedicated towards health solutions as well as a lack of awareness of basic health knowledge. In Pakistan, 1 in 89 women die due to pregnancy or childbirth-related complications.  Similarly, almost 7 infants out of 100 die before they reach one year of age.  Almost 40 percent of children in Pakistan are malnourished.  Preventable conditions such as malaria, diarrhea, bronchial infections, and gastrointestinal infections abound. Health indicators suggest that it is the lack of accessible healthcare — not terrorism, drones or the energy crisis — that is the greatest adversity facing Pakistan.  Pakistan spends a shockingly low percentage of its GDP (2.6 percent) on healthcare.  The poor quality of government-provided health services in Pakistan is the major reason behind the large role played by the private sector in healthcare.",
        para2:
          "HOPE seeks to remedy the healthcare crisis in Pakistan through its network of Hospitals, Maternal and Child Health Clinics, Basic Health Units, and Mobile Health Units throughout Pakistan.  We aim to provide healthcare in the form of treatments, preventive care, and emergency medicine.  Currently we have four charitable Hospitals, eight Maternal and Child Health Centers, one Basic Health Unit, and two Mobile Health Units. HOPE operates a network of Hospitals, Maternal and Child Health Centers, Basic Health Units, and Mobile Health Units throughout Pakistan which provide free/nominal cost healthcare to 750,000 patients per year.  70 percent of our beneficiaries are women/children.",
        img: healthMain,
      },
    },
    {
      logo: education,
      name: "Education",
      count: 11000,
      link: "education",
      subpage: {
        heading: "The Education Crisis in Pakistan",
        subheading: "Working Towards a Brighter Future",
        para1:
          "Pakistan is one of the few countries in the world with a rising illiteracy rate.  In a country where 60 percent youth are illiterate and only 1 in 3 women in rural areas can read and write, HOPE has been working hard to reverse this trend.  HOPE has implemented an innovative solution to helping children (and especially girls) in Pakistan’s rural and remote areas – HOPE home schools – whereby girls who ordinarily face multiple obstacles to obtaining an education are becoming teachers and role models in the community.",
        para2:
          "Together with our three formal schools, HOPE has an educational network which serves 11,000 students per year, 80 percent of these students are girls who have historically been neglected.  We have coupled the chances of success for these students by promoting vocational training programs after high school whereby male and female students can empower themselves economically by pursuing training in computers and textile design.  These students are also mentored to begin careers in the private sector, start their own businesses, or even pursue futures at HOPE.",
        img: educationMain,
      },
    },
    {
      logo: vocational,
      name: "Vocational Training",
      count: 7000,
      link: "vocational_training",
      subpage: {
        heading: "Vocational Training",
        subheading: "Beating Poverty",
        para1:
          "HOPE has established vocational centers in the Karachi metropololitan area (Zia Colony, Bilal Colony, Badin), Thatta, Sujawal, and Muzaffargarh (Punjab), Pakistan.  These vocational centers provide income-generating skills to young women and men in sewing and embroidery as well as computer literacy and English proficiency.",
        para2:
          "The focus of these centers is to enable individuals to become self-sufficient by providing them with vocational training.  HOPE USA uses this strategy to help find a permanent solution to those living in poverty.  To date, over 7,000 students have benefitted from vocational training.  Particular emphasis is placed upon providing training to females in order to promote economic empowerment.  80 percent of students in HOPE’s vocational training centers are females.",
        img: vocationalMain,
      },
    },
    {
      logo: aqua,
      name: "Aqua Project",
      count: 10000,
      link: "aqua_project",
      subpage: {
        heading: "Aqua Project",
        subheading: "Fulfilling a Basic Need",
        para1:
          "Access to clean water is essential for every human being's health.  Unfortunately many of Pakistan's underprivileged communities suffer from water borne diseases such as typhoid, E. Coli infections, and cholera due to the lack of access to clean water.  Since 2009, HOPE has partnered with Proctor & Gamble to distribute PuR amongst rural and remote communities.  PuR is a small sachet produced by P&G which purifies polluted water by eliminating harmful elements from it.  Within the first year HOPE launched this campaign (from 2009 to 2010) we distributed 1.2 million sachets of PuR.  During the 2022 Pakistan Flood Crisis, 21 million liters of PuR were distributed in flood-ravaged communities.  In our outreach efforts, we teach the importance of consuming clean water along with disease prevention by handwashing and soap.",
        para2:
          "Hand pumps are a wonderful way to create a Sadaqa Jaariyah (perpetual charity) for yourself, your family, and especially your loved ones who have passed away.  Not only do they allow impoverished villagers access to a clean water source, this effort in turn helps reduce the spread of waterborne illnesses such as diarrhea and gastroenteritis.  Constructing a hand pump therefore serves as a much-needed proactive healthcare measure for underserved communities. HOPE has approximately 140 hand pumps scattered throughout various poor localities and villages in Pakistan such as: Ghagger, Gharo, Khatore, Tharpakar, Sakhro, Badin, Karachi (Link Road), Muzaffargarh, Thatta, and Azad Kashmir, just to name a few.  Each hand pump provides a steady supply of clean water for 50 to 75 families (400 to 800 people). Hand pumps are constructed on a first-come first-serve basis.  It can take anywhere from eight to ten months from the time you place your initial order to the time we can update you with pictures of your completed hand pump.  Constructing a hand pump is a complex process because several locations must be tested before our on-ground team can determine an ideal spot in which to excavate",
        img: aquaMain,
      },
    },
    {
      logo: emergency,
      name: "Emergency Relief",
      count: 500000,
      link: "emergency_relief",
      subpage: {
        heading: "Emergency Relief",
        subheading: "Coming to the Rescue",
        para1:
          "HOPE has been a critical responder to areas in Pakistan affected by natural disasters.  To date we have helped 500,000 underserved individuals rebuild their lives by providing food, shelter, and medical attention following an emergency.  In a nation already struck with poverty, we go the extra mile to overcome emergencies.",
        para2:
          "HOPE USA has been on the ground providing relief to flood victims since Day 1 of this Karachi Flooding Crisis.​ We have aided over 115,000 Pakistan Flood Victims. The 2005 earthquake in northern Pakistan left the region devastated and tens of thousands of people were in dire need of help.  Due to the massive displacement of families, women and children were hit especially hard and malnourishment was rampant among survivors. HOPE deployed a medical team to Swat and Dir to administer relief aid to the Internationally Displaced Persons in the region.  This diverse team of medical professionals and social workers treated 1,000 patients during their work in the area. In June 2007, the coasts of Sindh and Balochistan were ravaged by hurricanes and floods.  The waters left roads and transport lines unusable,  making relief efforts almost impossible. In a collaborative effort, HOPE, Indus Motors, HSBC Bank, and House of Habib set up relief operations in Gadap, Dadu, Juhi and Kharo Chand, all regions which were heavily affected by the storms. On October 29, 2008 Balochistan was rocked by a 6.4 earthquake; the areas of Ziarat and Pishin district were worst hit.  Over 200 people perished in the disaster and thousands more were left displaced and homeless with winter on its way.  HOPE assembled a team of 20 medical professionals and social workers to alleviate the condition of those affected by the earthquake. ",
        img: emergencyMain,
      },
    },
    {
      logo: food,
      name: "Food Security",
      count: 10000,
      link: "food_security",
      subpage: {
        heading: "Tackling Food Insecurity in Pakistan",
        subheading: "Addressing Basic Human Needs",
        para1:
          "Due to poverty rates of 25 to 40%, recurring natural disasters, and political and economic volatility, much of Pakistan's population struggles to meet basic needs such as food security. This has resulted in 40 million people (out of 220 million total) who are not getting enough nutrients. In fact, Pakistan has twice the rate of malnourished people than other countries worldwide. Growth stunting due to malnourishment/undernourishment affects as many as 50% of Pakistan's children. 40% of children under the age of 5 in Pakistan are stunted according to the UN World Food Program, and of those, 11% are severely malnourished. Similarly, 20% of the general population faces hunger on a daily basis.",
        para2:
          "HOPE is aiming to tackle poverty from all angles: Healthcare, Education, Vocational Training, Clean Water, and Disaster Relief. We believe that citizens can break free from the cycle of poverty through adequate intervention. By tackling the crisis of food insecurity at a grassroots level, we are reducing malnourishment in the general population, and especially children, which will then lead to better health outcomes for the most vulnerable fragments of society in Pakistan. HOPE USA is attempting to tackle the problem of food insecurity in Pakistan head-on by delivering monthly food rations to families living below the poverty line in Pakistan. Our Food Rations is one of our most cherished donor-initiated projects and was inspired by a supporter's concern for our beneficiaries living well below the poverty line in Pakistan.  For this ongoing project, we hand deliver a month's supply of food rations to as many families as we are able to help them fulfill their basic needs for nutrition.  This movement began as a humble gesture and has only amplified in reach, especially during times of high demand such as the Covid pandemic and the 2022 Pakistan Flood Crisis. Our Food Rations consist of a month's supply of Rice, Wheat Flour (to make tortillas), Lentils, Cooking Oil, Milk Powder, Tea, Sugar, Salt, and Biscuits - enough for a family of 8. In addition to distributing Food Rations, during various occasions throughout the year, our team reaches out to underserved communities by sharing cooked food (such as biryani, a South Asian rice and chicken dish).  Cooked food is distributed during times of emergency aid, school functions, and sometimes just to bring some joy to underserved areas. During Ramadan, our distribution of both Food Rations and Door-to-Door Iftars increases, and we also commemorate communities coming together to enjoy a meal while they break fast.  Usually our functions are held on school campuses and we are humbled that many corporate supporters and organizations have stepped up to sponsor these events.  In addition to providing a nutritious meal, community iftars are a perfect way to help create and nurture bonds between students, community mentors, and human beings. The Islamic holiday of Eid ul Adha provides us with an opportunity to distribute meat to underserved communities, all while commemorating the occasion.  For the vast majority of our beneficiaries, Eid ul Adha is the only time of year they are fortunate enough to enjoy meat, and we encourage our supporters to share Qurbani amongst the poor in underdeveloped neighborhoods throughout Pakistan.",
        img: foodMain,
      },
    },
    {
      logo: ramazan,
      name: "Ramadan Activities",
      count: 15000,
      link: "ramazan_activities",
      subpage: {
        heading: "Ramadan Activities",
        subheading: "Going the Extra Mile to Help the Impoverished",
        para1:
          "Every year during the holy month of Ramadan, HOPE amps up its efforts to help the impoverished.  From giving children in HOPE schools a new outfit for Eid, to sponsoring community iftar events, to distributing food staples and zakat (Islamic almsgiving), HOPE strives to make this month special for all.",
        para2:
          "HOPE USA has been sponsoring Ramadan iftars in its formal schools in Pakistan (in Zia Colony: 610 students, Muzaffargarh: 320 students, and Thatta: 340 students) for the past ten years.  Iftar is the meal that Muslims eat at sundown after a day of fasting.  Providing dinner for one child costs $3 and as a donor you can sponsor an entire school or a group of children. A silver lining of the Covid-19 pandemic was that it ushered in a new tradition of delivering hot meals to those in need. The 11,000 students who attend HOPE's formal and home schools in Pakistan come from backgrounds of extreme poverty.  They are used to sacrificing even the basics such as a meal, clean water, and proper housing.  We have made it a tradition to gift them with new outfits every Eid. HOPE distributes monthly food rations year-round and especially during Ramadan.  Each family is provided with necessities such as rice, flour, lentils, and dry foods. HOPE uses general donation (Sadaqa) funds towards health and educational activities that improve the community as a whole such as hospital beds, hospital equipment, surgical equipment, neonatal incubators, desks for students, and teaching supplies.",
        img: ramadanMain,
      },
    },
    {
      logo: qurbani,
      name: "Qurbani/Udhiya",
      count: 500000,
      link: "qurbani_udhiya",
      subpage: {
        heading: "Qurbani/Udhiya Distribution",
        subheading: "Reaching Out to Others",
        para1:
          "Every year, during the Islamic holiday of Eid ul Adha, HOPE USA participates in the spirit of giving by raising funds for Qurbani/Udhiya for the impoverished in Pakistan.  Over the years we have provided meat for thousands of people in slum areas of Karachi such as Behas Colony, Zia Colony, Bhattiabad, Bilal Colony, Manzoor Colony, Thatta, Badin, Muzaffaragarh, and Sujawal.  Together with your efforts, we can work towards alleviating poverty in Pakistan.",
        para2: "",
        img: qurbaniMain,
      },
    },
  ];

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
