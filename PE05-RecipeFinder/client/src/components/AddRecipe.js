import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css'; // Updated CSS import path

function AddRecipe() {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = { 
      name, 
      ingredients: ingredients.split(',').map(ing => ing.trim()), 
      instructions 
    };

    await fetch('http://localhost:5000/api/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRecipe),
    });

    navigate('/');
  };

  return (
    <div className="add-recipe-container">
      <h1>Add Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label>Recipe Name</label>
        <input
          type="text" 
          placeholder="Recipe Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <label>Ingredients</label>
        <textarea 
          placeholder="Ingredients (comma separated)" 
          value={ingredients} 
          onChange={(e) => setIngredients(e.target.value)} 
          required 
        />
        <label>Instructions</label>
        <textarea 
          placeholder="Instructions" 
          value={instructions} 
          onChange={(e) => setInstructions(e.target.value)} 
          required 
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipe;
