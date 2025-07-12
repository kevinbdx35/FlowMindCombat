/**
 * Point d'entrée principal de l'application FlowMindCombat
 * Configure React et monte l'application dans le DOM
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Création du root React 18+ pour le rendu
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Rendu de l'application avec StrictMode pour le développement
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Mesure des performances (optionnel)
// Pour l'analytics, passer une fonction: reportWebVitals(console.log)
reportWebVitals();
