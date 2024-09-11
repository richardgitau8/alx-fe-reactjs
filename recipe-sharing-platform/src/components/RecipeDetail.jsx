// src/components/RecipeDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipesData from '../data/data.json';

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe by ID from the data
    const selectedRecipe = recipesData.find((item) => item.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-96 object-cover mb-6 rounded-lg"
      />

      {/* Recipe Ingredients */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc pl-6">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="mb-2 text-gray-700">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>

      {/* Cooking Instructions */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
        <ol className="list-decimal pl-6">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="mb-2 text-gray-700">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
