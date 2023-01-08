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
  const [guestlist, setguestlist] = useState(false);
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
      setLocation(index.city + ", " + index.country);
    });
  }, [active]);
  function Location_dropdown() {
    if (active != true) {
      setactive(!active);
    } else {
      setdropdownlist(!dropdownlist);
      setguestlist(false);
    }
  }
  function Guest_dropdown() {
    if (active != true) {
      console.log("test");
      setactive(!active);
    } else {
      setguestlist(!guestlist);
      setdropdownlist(false);
    }
  }
  const childToParent = (countData) => {
    setcounts(countData);
  };

  return (
    <React.Fragment>
      <div className="header-container">
        <nav>
          <div className="navbrand">
          {active ? (
                <div className="nav-header-info">
                  <div className="info">Edit your search</div>
                  <div className="close">X</div>{" "}
                </div>
              ) : (
                <img src={logo} alt="windBnb-logo" />
              )}
          </div>
          <div className="search-menu">
            <div className="col" >
              {location}
            </div>
            <div className="col2">Guest</div>
            <div className="dropdown">
            <ul className={dropdownlist ? "location-list" : "hidden"}>
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
            <div className="col3">
            {active ? (
                  <div className="button-container" onClick={()=>{setactive(!active)}}>
                    {<FontAwesomeIcon icon={faSearch} />}Search
                  </div>
                ) : (
                  <div>{<FontAwesomeIcon icon={faSearch} />}</div>
                )}
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Header;
