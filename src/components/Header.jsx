import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import "../assets/styles/header.css";
import locations from "../stays.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [location, setLocation] = useState([]);
  const [dropdownlist, setdropdownlist]= useState();
  const [active, setactive] = useState(true);

  const droplocation = [
    "Helsinki, Finland",
    "Turku, Finland",
    "Vaasa, Finland",
    "Oulu, Finland",
  ];
  useEffect(() => {
    locations.map((index) => {
      setLocation(index.city +"," + index.country);

    });
  }, [active]);
function dropdownflag(){
  setdropdownlist("hello")
}
  return (
    <React.Fragment>
      <nav>
        <div className="brand-container">
          <div className="brand-logo">
            <img src={logo} alt="windBnb-logo" />
          </div>
        </div>

        <div
          className={
            active ? "search-container input-group" : "search-container-active"
          }
        >
          <div className="location-search">
            <span onClick={(e)=>{dropdownflag()}}>{dropdownlist ? dropdownlist : "sdsdsd"}</span>
            <ul className="location-list">
              {droplocation.map((value, key)=>{
                 <li key={key}>{value}dfdfdf</li>
              })}
             
            </ul>
          </div>
          <div className="Guest-search"></div>
          <div className="search-button">
            {" "}
            <i>
              <FontAwesomeIcon icon={faSearch} />
            </i>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Header;
