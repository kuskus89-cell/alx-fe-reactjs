 // RecipeDetails component

 import { useParams, Link } from "react-router-dom";
import useRecipeStore from "../store/recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

function RecipeDetails() {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      <Link to={`/edit/${recipe.id}`}>Edit</Link>
      <DeleteRecipeButton id={recipe.id} />
    </div>
  );
}

export default RecipeDetails;
