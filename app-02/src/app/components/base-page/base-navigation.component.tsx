import React from 'react';
import { Link } from "react-router-dom";
import { NsBox } from "./base-navigation.style";

type FcProps = {
  customProp?: any;
};

const LINKS = [
  { id: "home", href: "/", name: "Home" },
  { id: "topics", href: "/topics", name: "Topics" },
  { id: "shelf", href: "/shelf", name: "Shelf" },
  { id: "editor", href: "/editor", name: "Editor" },
]

export const BaseNavigation: React.FC<FcProps> = ( props ) => {

  const preventDefault = ( event: React.SyntheticEvent ) => event.preventDefault();

  return (
    <NsBox>
      {
        LINKS.map( ( link, index ) => (
          <Link key={ link.id + index } to={ link.href }>{ link.name }</Link>
        ) )
      }
    </NsBox>
  );
};
