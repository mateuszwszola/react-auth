import React, { useState, useCallback, useEffect } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  const login = useCallback(() => {
    setLoggedIn(true);
  }, [setLoggedIn]);

  const logout = useCallback(() => {
    setLoggedIn(false);
  }, [setLoggedIn]);

  useEffect(() => {
    if (loggedIn && !history.location.pathname.includes("dashboard")) {
      history.push("/dashboard");
    } else if (!loggedIn && history.location.pathname === "/dashboard") {
      history.push("/");
    }
  }, [loggedIn, history.location.pathname]);

  return (
    <div>
      <h1>React Auth Example</h1>
      <Header loggedIn={loggedIn} login={login} logout={logout} />

      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>

        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
