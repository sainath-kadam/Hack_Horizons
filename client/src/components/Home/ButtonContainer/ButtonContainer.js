import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonContainer.css';

function ButtonContainer() {
  return (
    <div className="button-container">
      <Link to="/video-call">
        <button className="button">Video Call</button>
      </Link>
      <Link to="/placement-predictor">
        <button className="button">Placement Predictor</button>
      </Link>
    </div>
  );
}

export default ButtonContainer;
