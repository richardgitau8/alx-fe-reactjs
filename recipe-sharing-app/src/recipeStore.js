import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),

  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  generateRecommendations: () => set(state => {
    // Mock implementation for generating recommendations based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  // Recalculate recommendations when favorites change
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
