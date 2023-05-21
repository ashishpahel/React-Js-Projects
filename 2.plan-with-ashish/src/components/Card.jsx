import React from "react";
import { useState } from "react";

const Card = ({ id, image, info, price, name, removeTour }) => {
  // use the useState Hook
  const [readmore, setReadmore] = useState(false);

  // if readmore button is true then full info show else first 200
  const description = readmore ? info : `${info.substring(0, 200)}....`;

  return (
    <div className="card">
      {/* image  */}
      <img src={image} className="image" alt="img"></img>

      {/* tour info  */}
      <div className="tour-info">
        <div className="tout-details">
          <h4 className="tour-price"> ₹ {price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>

        <div className="description">
          {description}
          <span
            className="read-more"
            onClick={() => {
              setReadmore(!readmore);
            }}
          >
            {readmore ? `Show Less` : `Read More`}
          </span>
        </div>

        {/* button for remove specific tour  */}
        <button className="btn-red" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Card;
