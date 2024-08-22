import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [], // Array to hold favorite recipe IDs
  recommendations: [], // Array to hold recommended recipes

  // Action to add a recipe to favorites
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Action to generate recommendations based on favorites
  generateRecommendations: () => set(state => {
    // Mock implementation for generating recommendations
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  // Action to set the list of recipes (useful for initial load or updates)
  setRecipes: (recipes) => set({ recipes }),

  // Action to set favorites and update recommendations based on them
  setFavorites: (newFavorites) => {
    set({ favorites: newFavorites });
    set(state => {
      const recommended = state.recipes.filter(recipe =>
        newFavorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    });
  }
}));

export { useRecipeStore };
