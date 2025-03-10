import React, { useState, useEffect } from "react";

const RecipeForm = ({ initialData = {}, onSubmit }) => {
  const [name, setName] = useState(initialData.name || "");
  const [ingredients, setIngredients] = useState(initialData.ingredients?.join(", ") || "");
  const [instructions, setInstructions] = useState(initialData.instructions || "");

  useEffect(() => {
    setName(initialData.name || "");
    setIngredients(initialData.ingredients?.join(", ") || "");
    setInstructions(initialData.instructions || "");
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipeData = { name, ingredients: ingredients.split(","), instructions };
    onSubmit(recipeData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} placeholder="Recipe Name" onChange={(e) => setName(e.target.value)} required />
      <textarea value={ingredients} placeholder="Ingredients (comma separated)" onChange={(e) => setIngredients(e.target.value)} required />
      <textarea value={instructions} placeholder="Instructions" onChange={(e) => setInstructions(e.target.value)} required />
      <button type="submit">{initialData.name ? "Update Recipe" : "Add Recipe"}</button>
    </form>
  );
};

export default RecipeForm;
