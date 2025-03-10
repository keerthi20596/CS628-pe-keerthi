import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RecipeForm from "./RecipeForm";
import "../styles.css";

const EditRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error("Error fetching recipe:", error));
  }, [id]);

  const handleUpdateRecipe = async (updatedRecipe) => {
    await fetch(`http://localhost:5000/api/recipes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedRecipe),
    });
    navigate(`/recipe/${id}`);
  };

  if (!recipe) return <div>Loading recipe...</div>;

  return (
    <div>
      <h1>Edit Recipe</h1>
      <RecipeForm initialData={recipe} onSubmit={handleUpdateRecipe} />
    </div>
  );
};

export default EditRecipe;
