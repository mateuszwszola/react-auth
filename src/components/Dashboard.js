import React from 'react';
import { useAuth } from '../context/authContext';

const Dashboard = () => {
  const { user } = useAuth();
  const displayName = (user && user.displayName) || 'User';
  const photoURL = user && user.photoURL;

  return (
    <div className="max-w-screen-md mx-auto mt-12 flex flex-col items-center">
      {photoURL && (
        <img
          className="max-w-sm rounded-full w-full"
          src={photoURL}
          alt={`${displayName} avatar`}
        />
      )}
      <h1 className="text-3xl mt-12 text-gray-900 text-center">
        Hello {displayName}!
      </h1>
    </div>
  );
};

export default Dashboard;
