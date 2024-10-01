import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Recipes from './Recipes';
import Upload from './Upload';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/upload">Upload Recipe</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Welcome to our Recipe Sharing Platform!</h1>} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </Router>
  );
}

export default App;
