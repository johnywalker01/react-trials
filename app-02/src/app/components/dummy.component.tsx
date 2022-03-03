import React from 'react';

type FcProps = {
  customProp?: any;
};

export const Dummy: React.FC<FcProps> = ( props ) => {
  return (
    <main style={ { padding: '1rem' } }>
      <p>{ 'There\'s nothing here!' }</p>
    </main>
  );
};

