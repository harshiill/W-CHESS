import { useState } from 'react';
import './App.css';


function App() {
  const [gameCode, setGameCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCreateGame = () => {
    if (gameCode) {
      // Logic to handle game creation
      alert(`Game created with code: ${gameCode}`);
      setErrorMessage(''); // Clear any previous error message
    } else {
      setErrorMessage('Please enter a game code to create a game.');
    }
  };

  const handleJoinGame = () => {
    if (gameCode) {
      // Logic to handle joining a game
      alert(`Joining game with code: ${gameCode}`);
      setErrorMessage(''); // Clear any previous error message
    } else {
      setErrorMessage('Please enter a game code to join a game.');
    }
  };

  return (
    <>
      <h2>Game code</h2>
      <input
        type="text"
        id="codeInput"
        value={gameCode}
        onChange={(e) => setGameCode(e.target.value)}
      />
      <button id="createGame" onClick={handleCreateGame}>
        Create game
      </button>
      <button id="joinGame" onClick={handleJoinGame}>
        Join game
      </button>
      <div style={{ color: 'red' }} id="errorMessage">
        {errorMessage}
      </div>
    </>
  );
}

export default App;
