import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonDetailsPage from './components/PokemonDetailsPage';
import Pokedex from './components/Pokedex';
function App() {
  return (
   <Router>
   <Routes>
   <Route path="/" element={<Pokedex/>}/>
   <Route path="/pokemon/:id" element={<PokemonDetailsPage/>}/>
   </Routes>
   </Router>
  );
}

export default App;
