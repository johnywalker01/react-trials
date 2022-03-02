import { getTopics } from 'app/api/common';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

type FcProps = {
  customProp?: any;
};

export const Topics: React.FC<FcProps> = ( props ) => {

  const topics = getTopics();

  return (
    <>
      <h1>Topics</h1>
      <hr />
      <div style={ { display: "flex" } }>
        <nav
          style={ {
            borderRight: "solid 1px",
            padding: "1rem",
          } }
        >
          { topics.map( ( topic, index ) => (
            <Link
              style={ { display: "block", margin: "1rem 0" } }
              to={ `/topics/${topic.href}` }
              key={ topic.name + index }
            >
              { topic.name }
            </Link>
          ) ) }
        </nav>
        <Outlet />
      </div>
    </>
  );
};

