import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/authContext';
import { UserProvider } from './context/userContext';
import './styles/styles.css';

render(
  <Router>
    <AuthProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </AuthProvider>
  </Router>,
  document.getElementById('root')
);
