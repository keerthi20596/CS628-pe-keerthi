import React from "react";
import { Link } from "react-router-dom";

const CitiesList = ({ cities, setSelectedCity }) => {
  return (
    <div className="container">
      <h2>Cities List</h2>
      {cities.length === 0 ? (
        <p>No cities available</p>
      ) : (
        <ul>
          {cities.map((city) => (
            <li key={city.id}>
              {/* Link to the city details page */}
              <Link to={`/city/${city.id}`}>{city.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CitiesList;
