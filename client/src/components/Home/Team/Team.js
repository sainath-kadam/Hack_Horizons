import React from "react";
import { Link } from "react-router-dom";
import "./Team.css";

const Team = () => {
  return (
    <div className="about">
      <h1 className="heading">
          <span>Our Team</span>
        </h1>
      <div className="team">
        <div className="person">
          <img src="https://i.ibb.co/KN1bQh4/Whats-App-Image-2023-04-06-at-12-10-18-AM.jpg" alt="Person 1" className="round" />
          <div className="pdetail">
          <h2>Akash Kumar</h2>
          <p>IIIT Tiruchirappalli, ECE</p>
          <p>MERN and Django Developer </p>
          <a href="https://github.com/akashqumar"  target="_blank" className="contact-global">
          Contact
          </a>
          </div>
        </div>
        <div className="person">
          <img src="https://i.ibb.co/gtXxxpg/Whats-App-Image-2023-04-06-at-12-13-25-AM-1-1.png" alt="Person 2" className="round" />
          <div className="pdetail">
          <h2>Sainath Kadam</h2>
          <p>IIIT Tiruchirappalli,ECE</p>
          <p>MERN and Django Developer </p>
          <a href="https://sainath-kadam.netlify.app"  target="_blank" className="contact-global">
          Contact
          </a>
          </div>
        </div>
        <div className="person">
          <img src="https://i.ibb.co/wwsjD5t/Whats-App-Image-2023-04-05-at-3-39-29-AM.jpg" alt="Person 3" className="round" />
          <h2>Harsh Kumar</h2>
          <p>IIIT Tiruchirappalli,ECE</p>
          <p>Expertise in Machine Learning</p>
          <a href="https://www.linkedin.com/in/harsh-kmr/"  target="_blank" className="contact-global">
          Contact
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Team;
