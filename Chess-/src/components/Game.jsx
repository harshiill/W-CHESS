import React, { useEffect } from 'react';
import '/public/css/chessboard-1.0.0.min.css';
import Chessboard from 'chessboardjs';
import { Chess } from 'chess.js';
import io from 'socket.io-client';


function Game() {
  useEffect(() => {
    // Load jQuery
    const jQueryScript = document.createElement('script');
    jQueryScript.src = '/public/js/jquery-3.7.0.min.js';
    jQueryScript.async = true;
    document.body.appendChild(jQueryScript);

    // Load chessboard.js
    const chessboardScript = document.createElement('script');
    chessboardScript.src = '/public/js/chessboard-1.0.0.min.js';
    chessboardScript.async = true;
    document.body.appendChild(chessboardScript);

    // Load chess.js
    const chessScript = document.createElement('script');
    chessScript.src = '/public/js/chess-0.10.3.min.js';
    chessScript.async = true;
    document.body.appendChild(chessScript);

    // Load socket.io
    const socketScript = document.createElement('script');
    socketScript.src = '/socket.io/socket.io.js';
    socketScript.async = true;
    document.body.appendChild(socketScript);

    // Initialize the socket
    socketScript.onload = () => {
      const socket = window.io();
      console.log('Socket initialized:', socket);
    };

    return () => {
      // Cleanup scripts when component is unmounted
      document.body.removeChild(jQueryScript);
      document.body.removeChild(chessboardScript);
      document.body.removeChild(chessScript);
      document.body.removeChild(socketScript);
    };
  }, []);

  return (
    <div>
      <div id="myBoard" style={{ width: '700px' }}></div>
      <label>Status:</label>
      <div id="status"></div>
      <label>PGN:</label>
      <div id="pgn"></div>
    </div>
  );
}

export default Game;
