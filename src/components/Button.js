import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, ...buttonProps }) => (
  <button
    className="px-2 py-1 rounded-lg bg-green-400 text-green-100 shadow"
    {...buttonProps}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
