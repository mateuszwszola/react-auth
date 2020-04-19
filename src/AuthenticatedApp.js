import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NotFound from './components/404';

function AuthenticatedApp() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default AuthenticatedApp;
