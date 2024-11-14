import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-section">
      <h1 className="text-center">Reach out to me</h1>
      <div className="contact-body">
        <p className="text-justify">
          I’m available on almost every social media platform! Feel free to
          reach out to me, and I’ll respond within 24 hours. Whether you’re
          looking for guidance, collaboration, or just a conversation about
          technology, I’d be happy to assist you. Let’s connect and work
          together to bring innovative ideas to life!
        </p>
        <p className="icon-btn location">
          <i className="fas fa-location fa-2x"></i>
          Remote / Hybrid
        </p>
        <div className="social-medias">
          <a
            href="mailto:sivakumarjenushanth@gmail.com"
            className="icon-btn gmail"
          >
            <i className="fas fa-envelope fa-2x"></i>
          </a>

          <a href="tel:94773820373" className="icon-btn mobile">
            <i className="fas fa-phone fa-2x"></i>
          </a>
          <a
            href="https://github.com/JenushanthAts"
            className="icon-btn github"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sivakumar-jenushanth-2698b62a2/"
            className="icon-btn linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            href="https://www.hackerrank.com/profile/Jenushanth_95"
            className="icon-btn coding"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-code fa-2x"></i>
          </a>
        </div>
        <p className="text-center">
          Copyright &copy;{new Date().getFullYear()} {""}
          <span>Sivakumar Jenushanth</span>, All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Contact;
