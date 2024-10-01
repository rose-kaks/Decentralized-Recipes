const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/recipes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Recipe Schema
const recipeSchema = new mongoose.Schema({
  title: String,
  description: String,
  ingredients: String,
  steps: String,
  ipfsUrl: String,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

// API Routes
app.post('/api/recipes', async (req, res) => {
  const recipe = new Recipe(req.body);
  await recipe.save();
  res.status(201).send(recipe);
});

app.get('/api/recipes', async (req, res) => {
  const recipes = await Recipe.find();
  res.status(200).send(recipes);
});

// Start Server
app.listen(5000, () => {
  console.log('Backend server is running on port 5000');
});
