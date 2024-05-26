import React from 'react';
import mission from '../assets/mission.svg';
import vision from '../assets/vision.svg';
import chairperson from '../assets/chairperson.png';
import './styles/Hope.css';

const Hope = () => {
  return (
    <div className="hope container py-5">
      <div className="row mb-3">
        <div className="col-md-6">
          <h1>What is Hope?</h1>
          <p>
            (Health Oriented Preventive Education) is an NGO providing services
            of health and education for the poor and needy in Pakistan. The
            major activities of HOPE includes provision of health care through
            hospitals and maternal and child health centers. In addition
            education for children is provided through formal and informal
            schools. Vocational centers provide computers and vocational
            training for youth.
          </p>
        </div>
        <div className="col-md-6 d-flex flex-wrap justify-content-between">
          <div className="col-sm-6 mb-2">
            <img src={mission} alt="Mission" className="mb-3 icon-size" />
            <h3 className="text-primary">Our Mission:</h3>
            <p>
              To develop a society in which individuals are aware of the basic
              right & are provided with equal opportunities to access health and
              educational facilities.
            </p>
          </div>
          <div className="col-sm-6 mb-2">
            <img src={vision} alt="Vision" className="mb-3 icon-size" />
            <h3 className="text-primary">Our Vision:</h3>
            <p>
              A well educated and healthy society in which women and children
              have equal rights.
            </p>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-8">
          <h1>Chairperson’s Message</h1>
          <p>
            HOPE was started by a group of volunteers who wanted to bring a
            change in the lives of the poor and impoverished by bringing health
            and education to their doorsteps. HOPE was established in 1997 since
            more than 20 years and has grown from a band of street volunteers to
            a huge national network of schools and hospitals. Health and
            education are priority areas of HOPE, whereby HOPE is running four
            secondary care hospitals, MCH Centres and Mobile Health Units. The
            HOPE network extends from Karachi in the south to Thatta, Badin,
            Muzaffargarh (Punjab) and the mountains of Kashmir. Vocational
            Centres for youth in computer training and sewing/cutting are
            established. Research activities of HOPE extends from collaborations
            with the Centre for Disease Control (CDC), WHO, UNICEF among others
            on topics such as hand washing, Safe water, Safe injections,
            Poliomyelitis, tuberculosis etc. The education component forms the
            foundation of HOPE’s activities as without education of children and
            youth there will be no awareness and enlightenment. The future
            vision of HOPE is to expand its activities in other remote areas of
            Pakistan. With God’s help, HOPE will go where others have not dared.
            We are but just a drop in the ocean, but we will strive to change
            the lives of the people we touch.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <img
            src={chairperson}
            alt="Chairperson"
            className="img-fluid chairperson-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Hope;
