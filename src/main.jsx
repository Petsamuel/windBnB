import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
// import location from "./components/data-context"

import App from "./App";
import "./index.css";

// const context = createContext()
// export const LocationStay = context.Consumer

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <context.Provider value={{location: location}}> */}
    <App />
    {/* </context.Provider> */}
  </React.StrictMode>
);
