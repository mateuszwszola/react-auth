import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './components/Header';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';
import { useAuth } from './context/authContext';

function App() {
  const { user } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (user && !history.location.pathname.includes('dashboard')) {
      history.push('/dashboard');
    } else if (!user && history.location.pathname === '/dashboard') {
      history.push('/');
    }
  }, [user, history.location.pathname]);

  return (
    <>
      <Header />
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </>
  );
}

export default App;
