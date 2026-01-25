import create from 'zustand';
import React from 'react';
import { useRecipeStore } from './recipeStore';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () => set(state => ({filteredRecipes: state.recipes.filter(recipe =>
recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
  ))
  })),

  const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};