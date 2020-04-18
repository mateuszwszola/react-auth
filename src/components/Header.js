import React from 'react';
import { useAuth } from '../context/authContext';

const Header = () => {
  const { user, login, logout } = useAuth();

  return (
    <header>
      {user ? (
        <button type="button" onClick={logout}>
          Logout
        </button>
      ) : (
        <button type="button" onClick={login}>
          Login
        </button>
      )}
    </header>
  );
};

export default Header;
