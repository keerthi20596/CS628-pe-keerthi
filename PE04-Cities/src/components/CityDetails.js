import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const CityDetails = ({ cities }) => {
  // useNavigate hook must be called unconditionally
  const navigate = useNavigate();

  // Extract the city ID from the URL
  const { id } = useParams();
  
  // Find the city by ID
  const city = cities.find((city) => city.id === parseInt(id));
  
  // If city is not found, display an error message
  if (!city) return <p>City not found.</p>;

  const handleGoBack = () => {
    navigate("/"); // Navigate back to the cities list page
  };

  return (
    <div className="container">
      <h3>{city.name} Details:</h3>
      <p>Country: {city.country}</p>
      <p>Population: {city.population}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default CityDetails;
