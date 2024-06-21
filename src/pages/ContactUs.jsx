import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="contact-container container">
        <h1 className="text-center">Contact Us</h1>
        <p className="text-center mb-5">
          We would love to hear from you! Please fill out the form below and we
          will get in touch with you shortly.
        </p>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>
                <strong>Address:</strong> 1234 Street Name, City, State, 12345
              </p>
              <p>
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p>
                <strong>Email:</strong> info@hope.com
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="form-control"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
