import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import "../assets/styles/header.css";
import locations from "../stays.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Counter from "./counter";

function Header() {
  const [location, setLocation] = useState([]);
  const [dropdownlist, setdropdownlist] = useState(false);
  const [active, setactive] = useState(false);
  const [counts, setcounts] = useState();

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
  function Location_dropdown() {
    setactive(!active);
  }
  function Guest_dropdown() {
    setactive(!active);
  }
  const childToParent = (countData) => {
    setcounts(countData);
  };

  return (
    <React.Fragment>
      {/* <div className={active ? "hidden" : "brand-container"}>
          <div className="brand-logo">
            <img src={logo} alt="windBnb-logo" />
          </div>
        </div>
      <nav>
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
                Location_dropdown();
              }}
              className={
                active ? "location-display-active" : "location-display"
              }
            >
              {dropdownlist ? location : location}
            </span>
            <ul className={active ? "location-list" : "hidden"}>
              {droplocation.map((index, key) => (
                <li
                  key={key}
                  className="location-list-item"
                  onClick={() => {
                    setLocation(index);
                  }}
                >
                  <FontAwesomeIcon icon={faLocationDot} />
                  {index}
                </li>
              ))}
            </ul>
          </div>

          <div className="Guest-search">
            Guest <br />
            <span
              onClick={(e) => {
                Guest_dropdown();
              }}
              className="add_guest_wrapper"
            >
              {counts ? `${counts}  guess`: "add Guess"}
            </span>
            <div className={active ? "guest-list" : "hidden"}>
              <div className="guest-list-Wrapper">
                <div className="guest-title">Adults</div>
                <div className="sub-title">Ages 13 or Above</div>
                <Counter childToParent={childToParent}/>
              </div>
              <div className="guest-title">Children</div>
              <div className="sub-title"> Ages 2-12</div>
              <Counter childToParent={childToParent}/>
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
      </nav> */}
      <div className="headerWrapper">
        <div>
          <nav>
            <div className={active ? "hidden" : "brand-container"}>
              <img src={logo} alt="windBnb-logo" />
            </div>
            <div
              className={
                active ? "search-container-active" : "search-container"
              }
            >
              <div
                className={active ? " location-search location-search-active": "location-search"}
                onClick={(e) => {
                  Location_dropdown();
                }}
              >
                {location}
              </div>
              <div className={active? "Guest-search Guest-search-active": "Guest-search"}>Guests</div>
              <div className="sub-menu-wrapper">
                <div>
                <ul className={active ? "location-list" : "hidden"}>
              {droplocation.map((index, key) => (
                <li
                  key={key}
                  className="location-list-item"
                  onClick={() => {
                    setLocation(index);
                  }}
                >
                  <FontAwesomeIcon icon={faLocationDot} />
                  {index}
                </li>
              ))}
            </ul>
                </div >
                <div className={active? "hidden": "hidden"}>
                <div className="guest-list-Wrapper">
                <div className="guest-title">Adults</div>
                <div className="sub-title">Ages 13 or Above</div>
                <Counter childToParent={childToParent}/>
              </div>
              <div>
              <div className="guest-title">Children</div>
              <div className="sub-title"> Ages 2-12</div>
              <Counter childToParent={childToParent}/>
              </div>
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

        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
