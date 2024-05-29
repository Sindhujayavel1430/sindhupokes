import React from 'react';

const PokemonCard = ({ pokemon, likePokemon, dislikePokemon }) => {
  return (
    <div className="pokemon-card">
      <img src={pokemon.image} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <p>Type: {pokemon.type.join(', ')}</p>
      <p>Abilities: {pokemon.abilities.join(', ')}</p>
      <div className="buttons">
        <button onClick={likePokemon}>Like</button>
        <button onClick={dislikePokemon}>Dislike</button>
      </div>
    </div>
  );
};

export default PokemonCard;