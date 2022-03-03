import React from 'react';

type FcProps = {
  customProp?: any;
};

export const Shelf: React.FC<FcProps> = ( props ) => {
  return (
    <div>
      <h1>Shelf Page</h1>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Nesciunt eius facilis quae a at, laudantium similique illo asperiores,
        inventore repudiandae, in quia! Officiis nesciunt cum,
        praesentium velit adipisci accusamus cumque!
      </p>
    </div>
  );
};

