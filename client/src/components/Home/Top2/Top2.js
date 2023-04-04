import React from "react";

import AboutImg from "../../../assets/images/about.jpg";
import '../../../../src/assets/css/style.css'
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>what makes our  webiste special?</h3>
            <p>
            "Our goal is to help job seekers like you prepare for success in the job market. We understand the importance of preparation, research, and self-reflection in achieving career goals. Our resources are designed to help you showcase your strengths, identify areas for growth, and develop the skills and knowledge needed to succeed in your chosen career path."
            </p>
            <p>
            The job market is constantly changing and becoming more competitive. At our interview preparation site, we understand the importance of being fully prepared and confident in your abilities. We offer a range of resources to help you succeed, from interview tips and techniques to personalized coaching. By investing in your professional development and honing your interview skills, you'll be better equipped to navigate the job market and achieve your career goals. Let us help you take the next step towards success.

            </p>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
