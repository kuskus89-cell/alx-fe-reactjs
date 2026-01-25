// RecipeList component
  import { useRecipeStore } from './recipeStore';

  function RecipeList() {
  const { recipes, filteredRecipes } = useRecipeStore((state) => ({
    recipes: state.recipes,
    filteredRecipes: state.filteredRecipes,
  }));

  const listToShow =
    filteredRecipes.length > 0 ? filteredRecipes : recipes;

    return (
      <div>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    );
  }

  export default RecipeList;