import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from './feature/api/apiSlice';

ReactDOM.render(
  <ApiProvider api={apiSlice}>
  <App />
  </ApiProvider>,
  document.getElementById('root')
);
