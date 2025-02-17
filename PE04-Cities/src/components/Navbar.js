import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Cities Application</h1>
      <div>
        <Link to="/">Cities List</Link>
        <Link to="/add-city">Add City</Link>
      </div>
    </nav>
  );
};

export default Navbar;
