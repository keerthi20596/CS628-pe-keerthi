import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import CitiesList from "./components/CitiesList";
import AddCity from "./components/AddCity";
import CityDetails from "./components/CityDetails";

function App() {
  const [cities, setCities] = useState([
    { id: 1, name: "Seattle", country: "USA", population: "733,919" },
    { id: 2, name: "New York", country: "USA", population: "8,336,817" },
  ]);
  const navigate = useNavigate(); // For redirection after adding a city

  const addCity = (newCity) => {
    setCities((prevCities) => [...prevCities, newCity]);
    navigate("/"); // Redirect to cities list after adding a city
  };

  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<CitiesList cities={cities} />}
        />
        <Route
          path="/add-city"
          element={<AddCity addCity={addCity} />}
        />
        <Route
          path="/city/:id"
          element={<CityDetails cities={cities} />}
        />
      </Routes>
    </div>
  );
}

export default App;
