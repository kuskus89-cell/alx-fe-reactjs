import { create } from "zustand";

const useRecipeStore = create((setRecipes) => ({
  recipes: [
    { id: 1, title: "Pilau", ingredients: ["rice", "meat"], time: 45 },
    { id: 2, title: "Chapati", ingredients: ["flour"], time: 20 },
  ],

  // FAVORITES
  favorites: [],
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // RECOMMENDATIONS
  recommendations: [],
  generateRecommendations: () =>
    set((state) => ({
      recommendations: state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5
      ),
    })),

  // SEARCH & FILTERING
  searchTerm: "",
  filteredRecipes: [],

  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    })),

  // CRUD ACTIONS
  addRecipe: (recipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, recipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes,
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes,
      };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes,
      };
    }),
}));

export default useRecipeStore;
