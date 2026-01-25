import create from 'zustand';
import React from 'react';
import { useRecipeStore } from './recipeStore';

const useRecipeStore = create(set => ({
  recipes: [{ id: 1, title: "Pilau", ingredients: ["rice", "meat"], time: 45 },
    { id: 2, title: "Chapati", ingredients: ["flour"], time: 20 },],

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
  