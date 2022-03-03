import React from 'react';
import { Link } from 'react-router-dom';

type FcProps = {
  customProp?: any;
};

export const Home: React.FC<FcProps> = ( props ) => {
  return (
    <div>
      <h1>Home Page</h1>
      <hr />
      <p>
        Welcome to our content index. Head over to{ ' ' }
        <Link to="/topics" >topics</Link> to see our catalog.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Nesciunt eius facilis quae a at, laudantium similique illo asperiores,
        inventore repudiandae, in quia! Officiis nesciunt cum,
        praesentium velit adipisci accusamus cumque!

      </p>
    </div>
  );
};

