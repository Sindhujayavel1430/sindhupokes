import React from 'react';

const WelcomeScreen = ({ startGame }) => {
  return (
    <div className="welcome-screen">
      <h1>Welcome to PokeSwipe!</h1>
      <p>How to Play PokeSwipe:</p>
      <ul>
        <li>Pokemon Appear One at a Time</li>
        <li>Choose "Like" or "Dislike"</li>
        <li>Build Your Favorite Team</li>
      </ul>
      <button onClick={startGame}>Let's Go!</button>
    </div>
  );
};

export default WelcomeScreen;