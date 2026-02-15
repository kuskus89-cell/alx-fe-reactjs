import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  // ✅ Validation function
  const validate = () => {
    let newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    } else {
      const ingredientList = ingredients
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== "");

      if (ingredientList.length < 2) {
        newErrors.ingredients = "Please include at least 2 ingredients";
      }
    }

    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const newRecipe = {
        title,
        ingredients: ingredients.split(",").map((i) => i.trim()),
        steps,
      };

      console.log("Recipe Submitted:", newRecipe);

      setTitle("");
      setIngredients("");
      setSteps("");
      setErrors({});

      alert("Recipe added successfully! 🎉");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Add New Recipe 🍽️
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Title */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Recipe Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (errors.title) {
                  setErrors({ ...errors, title: "" });
                }
              }}
              className={`w-full p-3 rounded-lg border ${
                errors.title
                  ? "border-red-500"
                  : title
                  ? "border-green-500"
                  : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-green-400`}
              placeholder="Enter recipe title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Ingredients (comma separated)
            </label>
            <textarea
              value={ingredients}
              onChange={(e) => {
                setIngredients(e.target.value);
                if (errors.ingredients) {
                  setErrors({ ...errors, ingredients: "" });
                }
              }}
              rows="3"
              className={`w-full p-3 rounded-lg border ${
                errors.ingredients
                  ? "border-red-500"
                  : ingredients
                  ? "border-green-500"
                  : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-green-400`}
              placeholder="e.g. Flour, Sugar, Eggs"
            />
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">
                {errors.ingredients}
              </p>
            )}
          </div>

          {/* Steps */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Preparation Steps
            </label>
            <textarea
              value={steps}
              onChange={(e) => {
                setSteps(e.target.value);
                if (errors.steps) {
                  setErrors({ ...errors, steps: "" });
                }
              }}
              rows="4"
              className={`w-full p-3 rounded-lg border ${
                errors.steps
                  ? "border-red-500"
                  : steps
                  ? "border-green-500"
                  : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-green-400`}
              placeholder="Describe how to prepare the recipe"
            />
            {errors.steps && (
              <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Add Recipe
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;
