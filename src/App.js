import React from 'react';
import Header from './components/Header';
import Loading from './components/Loading';
import { useUser } from './context/userContext';

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));

function App() {
  const user = useUser();

  return (
    <>
      <Header />
      <React.Suspense fallback={<Loading />}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </React.Suspense>
    </>
  );
}

export default App;
