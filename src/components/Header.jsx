import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import "../assets/styles/header.css";
import locations from "../stays.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [location, setLocation] = useState([]);
  const [active, setactive]=useState(true)
  // const droplocation = []
  useEffect(() => {
    locations.map((index) => {
      setLocation(index.city +"," + index.country);
    });
   
    console.log(location)

  }, [active]);

  return (
    <React.Fragment>
      <nav>
        <div className="brand-container">
          <div className="brand-logo">
            <img src={logo} alt="windBnb-logo" />
          </div>
        </div>

        <div className={active ? "search-container input-group" : "search-container-active"}>
          <div className="location-search">
            <span>LOCATION</span>
            <ul className="location-list">
              {
              location.map((index, val)=>{
                <li className="location-list-item" key={val}>{index}</li>
              })
            }
             
            </ul>
          </div>
          <div className="Guest-search"></div>
          <div className="search-button"> <i>
          <FontAwesomeIcon icon={faSearch} />
        </i></div>
        </div>
       
      </nav>
    </React.Fragment>
  );
}

export default Header;
