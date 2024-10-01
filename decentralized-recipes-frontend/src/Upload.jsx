import { useState } from 'react';
import axios from 'axios';
import { create } from 'ipfs-http-client';

const ipfsClient = create('https://ipfs.infura.io:5001/api/v0');

function Upload() {
  const [recipe, setRecipe] = useState({
    title: '',
    description: '',
    ingredients: '',
    steps: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, ingredients, steps } = recipe;
    const added = await ipfsClient.add(JSON.stringify({ title, description, ingredients, steps }));
    const ipfsUrl = `https://ipfs.io/ipfs/${added.path}`;

    await axios.post('http://localhost:5000/api/recipes', { ...recipe, ipfsUrl });
    alert('Recipe uploaded successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Upload Recipe</h1>
      <input
        type="text"
        placeholder="Title"
        className="mb-3"
        value={recipe.title}
        onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        value={recipe.description}
        onChange={(e) => setRecipe({ ...recipe, description: e.target.value })}
        required
      />
      <textarea
        placeholder="Ingredients"
        value={recipe.ingredients}
        onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })}
        required
      />
      <textarea
        placeholder="Steps"
        value={recipe.steps}
        onChange={(e) => setRecipe({ ...recipe, steps: e.target.value })}
        required
      />
      <button type="submit">Submit</button>
    </form>

  );
}

export default Upload;

