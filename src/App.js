import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './components/Header';
import Loading from './components/Loading';
import DisplayError from './components/DisplayError';
import useFirebaseAuth from './useFirebaseAuth';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

function App() {
  const { user, login, logout, status, error } = useFirebaseAuth();
  const history = useHistory();
  const loggedIn = !!user;
  const loading = status === 'loading';

  useEffect(() => {
    if (loggedIn && !history.location.pathname.includes('dashboard')) {
      history.push('/dashboard');
    } else if (!loggedIn && history.location.pathname === '/dashboard') {
      history.push('/');
    }
  }, [loggedIn, history.location.pathname]);

  return (
    <div>
      <Header loggedIn={loggedIn} login={login} logout={logout} />
      <h1>React Auth Example</h1>

      {error ? (
        <DisplayError message={error.message} />
      ) : (
        <>
          {loading ? (
            <Loading />
          ) : (
            <>{loggedIn ? <AuthenticatedApp /> : <UnauthenticatedApp />}</>
          )}
        </>
      )}
    </div>
  );
}

export default App;
