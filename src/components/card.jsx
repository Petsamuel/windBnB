import React from "react";
import stays from "../stays.json";

function Card() {
  return (
    <React.Fragment>
      <div className="card-container">
        {stays.map((index, value) => (
          <div className="card-card" key={value}>
            <div className="card-image" >
             
              <img className="card-img" src={index.photo} alt="img" 
              />
            </div>
            <div className="card-body-section">
              <div className="card-type">{index.type}</div>
              <div className="card-rating">{index.rating}</div>
              
            </div>
            <div className="card-info">{index.title}</div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Card;
