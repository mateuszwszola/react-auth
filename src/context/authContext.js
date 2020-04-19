import React, { createContext, useContext } from 'react';
import Loading from '../components/Loading';
import useFirebaseAuth from '../hooks/useFirebaseAuth';

const AuthContext = createContext();

function AuthProvider(props) {
  const { user, login, logout, status } = useFirebaseAuth();

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
