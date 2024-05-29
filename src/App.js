import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WelcomeScreen from './welcomeScreen';
import PokemonCard from './PokemonCard';
import LikedPokemonList from './LikedPokemonList';

const App = () => {
  const [stage, setStage] = useState('welcome');
  const [pokemon, setPokemon] = useState(null);
  const [likedPokemon, setLikedPokemon] = useState([]);

  useEffect(() => {
    if (stage === 'game') {
      fetchRandomPokemon();
    }
  }, [stage]);

  const fetchRandomPokemon = async () => {
    const randomId = Math.floor(Math.random() * 150) + 1; // Assuming we want the first 150 Pokemon
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const data = response.data;
    const pokemonData = {
      name: data.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${randomId}.svg`,
      type: data.types.map(typeInfo => typeInfo.type.name),
      abilities: data.abilities.map(abilityInfo => abilityInfo.ability.name)
    };
    setPokemon(pokemonData);
  };
  
  const startGame = () => {
    setStage('game');
  };

  const likePokemon = () => {
    setLikedPokemon([...likedPokemon, pokemon]);
    fetchRandomPokemon();
  };

  const dislikePokemon = () => {
    fetchRandomPokemon();
  };

  return (
    <div className="App">
      {stage === 'welcome' && <WelcomeScreen startGame={startGame} />}
      {stage === 'game' && pokemon && (
        <PokemonCard
          pokemon={pokemon}
          likePokemon={likePokemon}
          dislikePokemon={dislikePokemon}
        />
      )}
      {stage === 'liked' && <LikedPokemonList likedPokemon={likedPokemon} />}
      {stage === 'game' && (
        <button onClick={() => setStage('liked')}>View Liked Pokémon</button>
      )}
    </div>
  );
};

export default App;

