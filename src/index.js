import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Importaciones para agergar autenticación, según la página de documentación
// de AWS


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

