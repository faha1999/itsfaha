import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/style.min.css';
import { ThemeProvider } from './Context';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);

reportWebVitals();
