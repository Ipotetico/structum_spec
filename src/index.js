import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/SCSS/reset.scss';
import '../src/SCSS/fonts.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
