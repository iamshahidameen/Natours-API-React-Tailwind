import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToursProvider } from './context/tours_context';
import { UsersProvider } from './context/users_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UsersProvider>
      <ToursProvider>
        <App />
      </ToursProvider>
    </UsersProvider>
  </React.StrictMode>
);
