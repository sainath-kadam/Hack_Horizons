// import React from "react";
// import { Link } from "react-router-dom";
// import "./Top5.css";

// const Top5 = () => {
//   return (
//     <div className="about">
//       <h1>About Us</h1>
//       <div className="team">
//         <div className="person">
//           <img src="/person1.jpg" alt="Person 1" className="round" />
//           <h2>John Doe</h2>
//           <p>Co-Founder & CEO</p>
//           <p>John has over 10 years of experience in the tech industry...</p>
//         </div>
//         <div className="person">
//           <img src="/person2.jpg" alt="Person 2" className="round" />
//           <h2>Jane Smith</h2>
//           <p>Co-Founder & CTO</p>
//           <p>Jane is a software engineer with a passion for building...</p>
//         </div>
//         <div className="person">
//           <img src="/person3.jpg" alt="Person 3" className="round" />
//           <h2>Mike Johnson</h2>
//           <p>Head of Marketing</p>
//           <p>Mike has over 15 years of experience in marketing and communications...</p>
//         </div>
//       </div>
//       <Link to="/portfolio" className="contact">
//         Contact Us
//       </Link>
//     </div>
//   );
// };

// export default Top5;

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
          <img src="https://i.ibb.co/NpfNnjd/Whats-App-Image-2023-04-05-at-3-33-20-AM.jpg" alt="Person 1" className="round" />
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
          <img src="https://i.ibb.co/Xz9TL25/Whats-App-Image-2023-04-04-at-4-21-24-PM.jpg" alt="Person 2" className="round" />
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
