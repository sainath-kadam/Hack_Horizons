import React from "react";
import { Link } from "react-router-dom";
import "./ButtonContainer.css";

function ButtonContainer() {
  return (
    <div className="button-container">
      <a href="https://gilded-paprenjak-3f4356.netlify.app/" target="_blank" rel="noopener noreferrer">
        <button className="button" style={{ fontSize: "1.5rem", padding: "1rem 2rem" }}>Video Call</button>
      </a>

      <a href="http://predictor0model.pythonanywhere.com/pcl" target="_blank" rel="noopener noreferrer">
        <button className="button" style={{ fontSize: "1.5rem", padding: "1rem 2rem" }}>Predict Your Placement</button>
      </a>
    </div>
  );
}

export default ButtonContainer;
