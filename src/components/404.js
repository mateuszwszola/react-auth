import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from './Button';

const NotFound = () => {
  const history = useHistory();
  const back = () => history.goBack();
  return (
    <div className="text-center mt-12">
      <h1 className="text-2xl mb-2">Page Not Found</h1>
      <Button onClick={back} type="button">
        Go Back
      </Button>
    </div>
  );
};

export default NotFound;
