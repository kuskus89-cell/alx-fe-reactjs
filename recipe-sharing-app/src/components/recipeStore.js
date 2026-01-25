import create from 'zustand';
import React from 'react';
import { useRecipeStore } from './recipeStore';

const useRecipeStore = create(set => ({
  recipes: [{ id: 1, title: "Pilau", ingredients: ["rice", "meat"], time: 45 },
    { id: 2, title: "Chapati", ingredients: ["flour"], time: 20 },],

favorites: [],
  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [],
  generateRecommendations: () => set(state => { const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
  searchTerm: "",
  filteredRecipes: []

  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    })),
  }));

  export default useRecipeStore;
  