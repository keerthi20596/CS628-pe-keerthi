import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles.css"; 

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/recipes/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Recipe not found");
        return response.json();
      })
      .then((data) => setRecipe(data))
      .catch((error) => console.error("Error fetching recipe:", error));
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      await fetch(`http://localhost:5000/api/recipes/${id}`, { method: "DELETE" });
      navigate("/");
    }
  };

  if (!recipe) return <div className="loading">Loading recipe...</div>;

  return (
    <div className="recipe-details">
      <h1>{recipe.name}</h1>
      <h3>Ingredients</h3>
      <ul className="ingredients-list">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>

      <div className="buttons-container">
        <button onClick={() => navigate(`/edit/${id}`)} className="edit-button">
          Edit
        </button>
        <button onClick={handleDelete} className="delete-button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default RecipeDetails;
