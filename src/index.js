import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // <--- Check of deze er is!
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* De BrowserRouter moet hier om je App heen staan! */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);