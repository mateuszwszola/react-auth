import React, { createContext, useContext } from 'react';
import Loading from '../components/Loading';
import DisplayError from '../components/DisplayError';
import useFirebaseAuth from '../useFirebaseAuth';

const AuthContext = createContext();

function AuthProvider(props) {
  const { user, login, logout, status, error } = useFirebaseAuth();

  if (status === 'error') {
    console.error(error);
    return <DisplayError message={error.message} />;
  }

  if (status === 'loading') {
    return <Loading />;
  }

  return <AuthContext.Provider value={{ user, login, logout }} {...props} />;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used withing a AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
