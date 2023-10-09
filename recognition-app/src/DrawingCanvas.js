import React, { useRef, useState, useEffect } from "react";
import ReactCanvasPaint from 'react-canvas-paint'

export default function DrawingCanvasGfg() {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(null);

  useEffect(() => {
    // Attendre que le canvas soit rendu
    if (canvasRef.current) {
      // Obtenez le dessin actuel depuis le canvas
      const canvas = canvasRef.current;
      const drawingDataUrl = canvas.toDataURL();

      // Mettez à jour l'état du dessin avec l'image en base64
      setDrawing(drawingDataUrl);

      // Effacez le dessin du canvas en réinitialisant le canvas
      const context = canvas.getContext('2d');
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Vous pouvez effectuer des actions supplémentaires ici si nécessaire
      console.log('Dessin terminé :', drawingDataUrl);
    }
  }, []);

  const handleFinish = () => {
    // Vous pouvez effectuer des actions supplémentaires ici si nécessaire
    console.log('Clic sur "Fini"');
  };

  return (
    <div style={{ marginLeft: '800px' }}>
      <h1 >Zone de Dessin</h1>
      <ReactCanvasPaint style={{ marginLeft: '800px' }} ref={canvasRef} />
      <button onClick={handleFinish}>Fini</button>
      {drawing && (
        <div>
          <h2>Dessin enregistré :</h2>
          <img src={drawing} alt="Dessin enregistré" />
        </div>
      )}
    </div>
  );
}
