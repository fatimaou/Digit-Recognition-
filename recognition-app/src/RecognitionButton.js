import React, { useState } from 'react';
import Button from './Button';

function RecognitionButton({ onRecognitionSubmit }) {
  const [drawing, setDrawing] = useState(null);

  const handleRecognitionSubmit = () => {
    // Vérifiez que le dessin n'est pas vide avant de soumettre
    if (drawing) {
      onRecognitionSubmit(drawing);
    }
  };

  return (
    <div>
      <Button style={{ marginLeft: '800px' }} variant="contained" color="primary" onClick={handleRecognitionSubmit}>
        Reconnaître
      </Button>
    </div>
  );
}

export default RecognitionButton;
