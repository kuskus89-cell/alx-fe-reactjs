import { useEffect, useState } from 'react'

function HomePage() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error loading recipes:', error))
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Recipe Collection
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm">
                {recipe.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage;