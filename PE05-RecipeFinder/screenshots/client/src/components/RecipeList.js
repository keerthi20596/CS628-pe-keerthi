import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <div>
      <h1>Recipe List</h1>
      <Link to="/add">
        <button>Add New Recipe</button>
      </Link>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <Link to={`/recipe/${recipe._id}`} className="recipe-link">
              {recipe.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
