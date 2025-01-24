import React from "react";
import ReactDOM from "react-dom/client"; // Use createRoot from ReactDOM
import App from "./App";
import "./index.css";

// Get the root element from index.html
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
