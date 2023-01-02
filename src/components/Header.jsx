import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import "../assets/styles/header.css";
import locations from "../stays.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [location, setLocation] = useState([]);
  const [dropdownlist, setdropdownlist] = useState();
  const [active, setactive] = useState(false);

  const droplocation = [
    "Helsinki, Finland",
    "Turku, Finland",
    "Vaasa, Finland",
    "Oulu, Finland",
  ];
  useEffect(() => {
    locations.map((index) => {
      setLocation(index.city + "," + index.country);
    });
  }, [active]);
  function dropdownflag() {
    setdropdownlist("hello");
    setactive(!active);
  }

  return (
    <React.Fragment>
      <nav>
        <div className={active ? "hidden" : "brand-container"}>
          <div className="brand-logo">
            <img src={logo} alt="windBnb-logo" />
          </div>
        </div>

        <div
          className={
            active
              ? "search-container-active input-group"
              : "search-container input-group"
          }
        >
          <div className="location-search">
            <span
              onClick={(e) => {
                dropdownflag();
              }}
              className={
                active ? "location-display-active" : "location-display"
              }
            >
              {dropdownlist ? location : location}
            </span>
            <ul className="location-list ">
              {droplocation.map((index, key) => (
                <li
                  key={key}
                  className="location-list-item"
                  onClick={() => {
                    setLocation(index)
                  }}
                >
                  {index}
                </li>
              ))}
            </ul>
          </div>

          <div className="Guest-search">
            Guest
            <span>Add guess</span>
            <div className="guest-list">
              <div>Adults</div>
              <div>Children</div>
            </div>
          </div>
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
