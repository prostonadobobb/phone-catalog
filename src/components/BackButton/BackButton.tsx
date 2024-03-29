import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.scss';

export const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      className="backButton"
      data-cy="backButton"
      type="button"
      onClick={() => navigate('..')}
    >
      <span className="backButton__icon" />
      Back
    </button>
  );
};
