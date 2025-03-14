import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    setShowMessage(true); // Show info message

    // Get form values
    const name = e.target.name.value;
    // const email = e.target.email.value;
    const message = e.target.message.value;

    // Construct mailto link
    const mailtoLink = `mailto:agboat@hope-ngo.com?subject=${name}&body=${message}`;

    // Open email client
    window.location.href = mailtoLink;
  };

  return (
    <>
      <Navbar />
      <div className="contact-container container">
        <h1 className="text-center">Contact Us</h1>
        <p className="text-center mb-5">
          We would love to hear from you! Please fill out the form below and we
          will get in touch with you shortly.
        </p>

        {showMessage && (
          <div className="alert alert-info text-center">
            The form submission is currently unavailable. Please send your message via email:
            <br />
            <a href="mailto:agboat@hope-ngo.com">agboat@hope-ngo.com</a>
          </div>
        )}

        <div className="row">
          <div className="col-md-6 mb-4">
          <div className="contact-info">
              <h2>HOPE Community Center, Karachi</h2>
              <p>
                <strong>Address:</strong> Plot # B-40, Street # 28, sector #
                32-A, Zia Colony, Korangi Industrial Area, Karachi, Pakistan.
              </p>
              <p>
                <strong>Phone:</strong> +92-21-35069450 – 35071423
              </p>
              <p>
                <strong>Email:</strong> agboat@hope-ngo.com
              </p>
            </div>
            <div className="contact-info">
              <h2>HOPE Field Office, Karachi</h2>
              <p>
                <strong>Address:</strong> 41-A, Amil Colony, Near Mazar-e-Quiad,
                Karachi.
              </p>
              <p>
                <strong>Phone:</strong> +92-21-32243889 – 32239930
              </p>
              <p>
                <strong>Email:</strong> agboat@hope-ngo.com
              </p>
            </div>
            <div className="contact-info">
              <h2>HOPE Community Center, Thatta</h2>
              <p>
                <strong>Address:</strong> Satiyoon Road, Bukahri Moholla,
                Thatta.
              </p>
              <p>
                <strong>Phone:</strong> +92-298-550491 – 550492
              </p>
              <p>
                <strong>Email:</strong> agboat@hope-ngo.com
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
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
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
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
