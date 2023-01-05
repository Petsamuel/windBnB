import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./App.css";
import "./mediaquery.css";

function App() {
  return (
    <React.Fragment>
      <div className="App-wrapper">
        <div className="header-component">
          <Header />
        </div>
        <section role="main" className="main-component">
        <Main />
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
