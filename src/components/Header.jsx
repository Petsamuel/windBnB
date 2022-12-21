import React,{useState, useEffect} from "react";
import logo from "../assets/logo.png";
import "../assets/styles/header.css";
import locations from "../stays.json"


function Header() {
  const [location, setLocation] = useState()
  useEffect(()=>{
  locations.map((index, val)=>{
    setLocation(index.city)
    // console.log(index.city)
  })
   
  })
  
  
  return (
    <React.Fragment>
      <nav>
        <div className="brand-container">
          <div className="brand-logo">
            <img src={logo} alt="windBnb-logo" />
          </div>
        </div>

        <div className="search-container">
         
            <div className="input-group">
             <div className="search-city">Helsinki</div>
             <input  className="search-input" type="text"/>
             <div  className="search-icon"><i></i></div>
            </div>
          </div>
        
      </nav>
    </React.Fragment>
  );
}

export default Header;
