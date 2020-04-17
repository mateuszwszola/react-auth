import React from "react";
import PropTypes from "prop-types";

const Header = ({ loggedIn, logout, login }) => {
  return (
    <header>
      {loggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </header>
  );
};

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

export default Header;
