import React from 'react';

const LikedPokemonList = ({ likedPokemon }) => {
  return (
    <div className="liked-pokemon-list">
      <h1>Pokémon you have liked ❤️</h1>
      <div className="pokemon-list">
        {likedPokemon.map((pokemon, index) => (
          <div key={index} className="pokemon-item">
            <img src={pokemon.image} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedPokemonList;