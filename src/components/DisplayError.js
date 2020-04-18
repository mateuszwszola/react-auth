import React from 'react';
import PropTypes from 'prop-types';

const DisplayError = ({ message }) => (
  <div>
    <h2>{message}</h2>
  </div>
);

DisplayError.defaultProps = {
  message: 'There was an error',
};

DisplayError.propTypes = {
  message: PropTypes.string,
};

export default DisplayError;
