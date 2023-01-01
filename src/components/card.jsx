import React from "react";
import stays from "../stays.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Card() {
  return (
    <React.Fragment>
      <div className="card-container">
        {stays.map((index, value) => (
          <div className="card-card" key={value}>
            <div className="card-image">
              <img className="card-img" src={index.photo} alt="img" />
            </div>
            <div className="card-wrapper">
              <div className="card-body-section">
                <div className="card-type-section">
                  {index.type === "Entire apartment"
                    ?<div className="card-type-wrapper"><span className="host">SUPER HOST</span>
                    <div className="card-type">{index.type} <span> {index.beds}.Beds</span></div> </div> 
                    : <div className="card-type">{index.type}</div>}
                </div>
                <div className="card-rating">
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faStar} />
                  </i>
                  {index.rating}
                </div>
              </div>
              <div className="card-info">{index.title}</div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Card;
