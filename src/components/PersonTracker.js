import React from 'react';

const PersonTracker = ({ location }) => {
  const defaultContent = 'Search for a person';
  return (
    <div>
      <h2>{(location.state && location.state.person) || defaultContent}</h2>
    </div>
  );
};

export default PersonTracker;
