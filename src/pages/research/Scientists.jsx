import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Scientists = () => {
  return (
    <>
      <Navbar />
      <div className="scientist-container py-5 mt-5">
        <h1 className="scientist-heading">
          DR. LUBY’S INTERACTION WITH HOPE OVER THE YEARS
        </h1>
        <p className="scientist-paragraph">
          I was first introduced to Dr. Mubina Agboatwalla and HOPE in 1994 when
          I was working in the Community Health Science Department of the Aga
          Khan University. Dr. Sue Fisher Hoch from the Pathology Department
          introduced Dr. Mubina as “a real public health person.” As we spoke I
          became interested in the community based work she was involved in.
        </p>
        <p className="scientist-paragraph">
          Soon after Dr. Mubina initiated HOPE. Paying a visit to the HOPE
          set-up, I was instantly impressed with the relationship the HOPE
          workers had with the community. Dr. Mubina explained that a key issue
          to community development was inter-relationship, as no lasting benefit
          could be achieved if resources were supplied only from the outside.
          One of the most visible problems in the community was large heaps of
          rubbish. HOPE convened community meetings where a shared solution was
          reached. The community committed to discarding their rubbish in
          designated containers provided by HOPE. Community members worked with
          HOPE to meet with local authorities to arrange for trash collection.
          Bravo! The system worked. Undeniably, teamwork can accomplish the
          impossible, not only trash collection but other goals that would
          improve the society.
        </p>
        <p className="scientist-paragraph">
          I started working with HOPE on research projects in 1997. Our
          collaborative work explored the benefits to health that could be
          achieved through household water treatment and promotion of
          hand-washing with soap. Collaborating with HOPE opened avenues for
          further teamwork.
        </p>
        <p className="scientist-paragraph">
          There were a number of aspects about working with HOPE that were
          outstanding. HOPE is primarily a community based NGO working to
          improve the lives of people. Unlike many NGOs that do not take
          rigorous data collection seriously, the HOPE team enthusiastically
          supports research agendas. Due to Dr. Mubina’s background in research,
          there was a familiarity with research methods and a willingness to
          design interventions specifically to address research queries. The
          strength of the HOPE platform for research focused on low income and
          high-need communities throughout the region. Dr. Mubina also insisted
          that the community gained something in the process of the research.
          Hence, a budget was formulated to give back some component to the
          community. Study sponsors from the Procter and Gamble Company were
          impressed at the outreach to these high need communities, and
          appreciated this participation in community development.
        </p>
        <p className="scientist-paragraph">
          Leaving Agha Khan University in 1998, I returned to the Center for
          Disease Control in Atlanta, Georgia, USA. Although I was finalizing a
          few projects in Pakistan, my primary work was in Guatemala. In 1999,
          while at work in Guatemala, I was contacted by the Procter & Gamble
          team informing me about the potential for follow-ups on some of the
          exciting results of our collaborative work with HOPE in Pakistan. Dr.
          Mubina’s response was enthusiastic, and in the years to follow we
          worked on several more projects together.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Scientists;
