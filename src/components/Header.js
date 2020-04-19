import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import Button from './Button';

const Header = () => {
  const { user, login, logout } = useAuth();

  return (
    <header className="w-full px-2 py-4 bg-blue-500 text-blue-100">
      <div className="flex justify-between items-center max-w-screen-lg mx-auto">
        <Link to="/" className="text-2xl">
          React Authentication Example
        </Link>
        <div>
          {user ? (
            <Button type="button" onClick={logout}>
              Logout
            </Button>
          ) : (
            <Button type="Button" onClick={login}>
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
