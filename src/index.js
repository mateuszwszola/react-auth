import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/authContext';
import './styles.scss';

render(
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>,
  document.getElementById('root')
);
