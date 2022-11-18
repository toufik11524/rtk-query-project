import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { productsApi } from './api/apiSlice';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <ApiProvider api={productsApi}>
        <App />
      </ApiProvider>
  </React.StrictMode>
);
