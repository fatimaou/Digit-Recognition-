import React from 'react';

function ResultDisplay({ recognitionResult }) {
  return (
    <div style={{ marginLeft: '800px' }}>
      <h2>Résultat de la Reconnaissance :</h2>
      {recognitionResult ? (
        <div>
          <p>Le chiffre ou la lettre reconnu(e) est :</p>
          <h1>{recognitionResult}</h1>
        </div>
      ) : (
        <p>Aucun résultat disponible pour le moment.</p>
      )}
    </div>
  );
}

export default ResultDisplay;
