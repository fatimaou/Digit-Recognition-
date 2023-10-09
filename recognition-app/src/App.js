import React from 'react';
import DrawingCanvas from './DrawingCanvas';
import RecognitionButton from './RecognitionButton';
import ResultDisplay from './ResultDisplay';

function App() {
  return (
    <div className="centered-container">
      <div className="container" style={{ maxWidth: 'sm' }}>
      <img src="./images/logo.png" alt="Logo" style={{ marginLeft: '900px' }} />
        <h4 style={{ marginLeft: '800px' }}>Reconnaissance de Chiffres et de Lettres</h4>
        <DrawingCanvas />
        <RecognitionButton />
        <ResultDisplay /> 
      </div>
    </div>
  );
}

export default App;
