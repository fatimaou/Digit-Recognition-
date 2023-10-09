import React from 'react';
import './Button.css';

function CustomButton({ label, onClick }) {
  return (
    <button style={{ marginLeft: '800px' }} className="custom-button" onClick={onClick}>
      {label}
    </button>
  );
}

export default CustomButton;
