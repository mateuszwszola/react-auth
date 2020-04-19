import React from 'react';

const Button = ({ children, ...buttonProps }) => (
  <button
    className="px-2 py-1 rounded-lg bg-green-400 text-green-100 shadow"
    {...buttonProps}
  >
    {children}
  </button>
);

export default Button;
