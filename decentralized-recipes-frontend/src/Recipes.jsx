import { useEffect, useState } from 'react';
import axios from 'axios';

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get('http://localhost:5000/api/recipes');
      setRecipes(response.data);
    };
    fetchRecipes();
  }, []);

  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <div key={recipe._id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Recipes;
