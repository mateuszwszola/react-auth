import React, { createContext, useContext } from 'react';
import { useAuth } from './authContext';

const UserContext = createContext();

function UserProvider(props) {
  return <UserContext.Provider value={useAuth().user} {...props} />;
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used withing a UserProvider');
  }
  return context;
}

export { UserProvider, useUser };
