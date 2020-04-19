import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import NotFound from './components/404';

function UnauthenticatedApp() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default UnauthenticatedApp;
