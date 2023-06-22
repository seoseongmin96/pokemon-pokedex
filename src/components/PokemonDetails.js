import React from 'react';
import './PokemonDetails.css'

const PokemonDetails = ({ pokemon }) => {

  if (!pokemon) {
    return <p>Loading...</p>;
  }

  const renderTypes = () => {
    return pokemon.types.map((type) => <span key={type.type.name} className= 'type'>{type.type.name}</span>);
  };

  const renderAbilities = () => {
    return pokemon.abilities.map((ability) => <span key={ability.ability.name} className= 'ability'>{ability.ability.name}</span>);
  };

  const renderMoves = () => {
    return pokemon.moves.map((move) => <li key={move.move.name}>{move.move.name}</li>);
  };


  return (
    <div className= 'pokemon-details'>
      <h2>{pokemon.korean_name} (#{pokemon.id})</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.korean_name} />
      <p>English Name: {pokemon.name}</p>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Type: {renderTypes()}</p>
      <p>Abilities: {renderAbilities()}</p>
      <p>Moves:</p>
      <ul>{renderMoves()}</ul>
    </div>
  );
};

export default PokemonDetails;