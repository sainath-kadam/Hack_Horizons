import React from "react";
import '../../../../src/assets/css/style.css'


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
          <a href="https://gilded-paprenjak-3f4356.netlify.app/"  target="_blank" className="btn">
          Interview call  
          </a>
          <br/>
          
          <a href="https://predictor0model.pythonanywhere.com/"  target="_blank" className="btn">
          Placemenet Predict 
          </a>
        </div>
      </section>
    </>
  );
};

export default Banner;
