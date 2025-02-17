import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCity = ({ addCity }) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [population, setPopulation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCity = {
      id: Date.now(), // Unique id for each city
      name,
      country,
      population,
    };
    addCity(newCity);
    navigate("/"); // Redirect to the cities list
  };

  return (
    <div className="container">
      <h2>Add City</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Country:</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />

        <label>Population:</label>
        <input
          type="text"
          value={population}
          onChange={(e) => setPopulation(e.target.value)}
          required
        />

        <button type="submit">Add City</button>
      </form>
    </div>
  );
};

export default AddCity;
