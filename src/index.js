import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import RWDContextProvider from './contexts/RWD';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RWDContextProvider>
      <App />
    </RWDContextProvider>
  </React.StrictMode>
);
