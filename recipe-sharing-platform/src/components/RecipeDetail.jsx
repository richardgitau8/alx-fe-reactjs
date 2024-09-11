import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import recipesData from '../data/data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe by its id from the recipesData
    const selectedRecipe = recipesData.find((recipe) => recipe.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-auto rounded-lg shadow-lg mb-4"
        />
        <p className="text-lg mb-6">{recipe.summary}</p>
      </div>
      <div className="bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
        <ul className="list-disc pl-6 mb-6">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-lg">{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-bold mb-4">Instructions</h2>
        <ol className="list-decimal pl-6 space-y-2">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="text-lg">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
