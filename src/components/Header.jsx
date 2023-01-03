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
            <ul className={active ? "location-list" :"hidden"}>
              {droplocation.map((index, key) => (
                <li
                  key={key}
                  className="location-list-item"
                  onClick={() => {
                    setLocation(index);
                  }}
                >
                  {index}
                </li>
              ))}
            </ul>
          </div>

          <div className="Guest-search">
            Guest <br />
            <span>Add guess</span>
            <div className={active ? "guest-list" : "hidden"}>
              <div className="guest-list-Wrapper">
                <div className="guest-title"> Adults</div>
                <div className="sub-title">Ages 13 or Above</div>
                <span className="counter">
                  <div>
                    <button className="plus">+</button>
                  </div>
                  <div>0</div>
                  <div>
                    <button className="minu">-</button>
                  </div>
                </span>
              </div>
              <div className="guest-title">Children</div>
              <div className="sub-title"> Ages 2-12</div>
              <span className="counter">
                <div>
                  <button className="plus">+</button>
                </div>
                <div>0</div>
                <div>
                  <button className="minus">-</button>
                </div>
              </span>
            </div>
          </div>
          <div className="search-button">
            {active ? (
              <div className="button-container">
                {<FontAwesomeIcon icon={faSearch} />}Search
              </div>
            ) : (
              <div>{<FontAwesomeIcon icon={faSearch} />}</div>
            )}
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Header;
