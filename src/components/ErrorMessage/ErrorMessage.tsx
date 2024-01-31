import React from 'react';
import './ErrorMessage.scss';

export const ErrorMessage: React.FC = () => {
  return (
    <p className="error">
      Error: Unable to load data from server!
    </p>
  );
};
