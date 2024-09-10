// src/components/HomePage.jsx
import React, { useState, useEffect } from 'react';
import recipesData from '../data/data.json';
import Sidebar from './Sidebar';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap">
      <Sidebar className="w-full md:w-1/4 lg:w-1/4" />
      <main className="flex-1 ml-80 p-4 md:ml-12 lg:ml-12">
        <h1 className="text-4xl font-bold mb-6 text-center">Recipe Collection</h1>

        {/* Search Bar */}
        <div className="mb-6 text-center md:w-1/2 lg:w-1/2 mx-auto">
          <input
            type="text"
            placeholder="Search recipes..."
            className="p-2 border border-gray-300 rounded-lg w-full max-w-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Recipe Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{recipe.title}</h2>
                <p className="text-gray-700 mb-4">{recipe.summary}</p>
                <a
                  href={`/recipes/${recipe.id}`}
                  className="inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300"
                >
                  VIEW RECIPE
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
