import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { recipes } from '../data.json';

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe , setRecipe] = useState (null);

    useEffect(() => {
        //find recipe by detail
        const foundRecipe = recipes.find(
            (item) => item.id ===parseInt(id)
        );
        setRecipe(foundRecipe);
    },[id]);
    if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 shadow-lg">{recipe.name}</h1>
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full max-w-md mb-4"
      />

      <h2 className="text-xl font-semibold">Ingredients:</h2>
      <ul className="list-disc ml-6 mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold">Instructions:</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;