import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function AuthenticatedApp() {
  return (
    <>
      <Switch>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>

        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
}

export default AuthenticatedApp;
