import React from "react";
import '../../../../src/assets/css/style.css'
import { Link } from "react-router-dom";
import { Button } from "@mui/material";


const Banner = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
        <h3>
            Ace Your Next <span>Interview</span>
          </h3>
          <h4>
            
            Go ace that interview , You're all set
          </h4>
<Link to="/dash/room">
  <button className="btn">
    Interview Room
  </button>
</Link>
          <br/>
          
          {/* <a href="https://predictor0model.pythonanywhere.com/"  target="_blank" className="btn">
          Placemenet Predict 
          </a> */}
        </div>
      </section>
    </>
  );
};

export default Banner;
