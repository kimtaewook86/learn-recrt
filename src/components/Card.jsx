// import React from 'react'

import React from 'react';

const Card = ({ title, subText }) => {
  return (
    <div className="card">
      <h5 className="card-title">{title}</h5>
      <p>{subText}</p>
      <button type="button" className="card-button">
        Go somewhere
      </button>
    </div>
  );
};

export default Card; // Export the Card component



