import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./App.css";
import "./mediaquery.css"

function App() {


  return (
    <React.Fragment>
    
      <div className="App-wrapper">
       
            <Header />
            <Main/>
            <Footer />
       
      </div>
      
    </React.Fragment>
  );
}

export default App;
