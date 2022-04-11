import { RouteLink } from 'app/datatypes/project-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { NsBox } from './base-navigation.style';

type FcProps = {
  customProp?: any;
};

const LINKS = [
  { id: 'home', href: RouteLink.root, name: 'Home' },
  { id: 'topics', href: RouteLink.topics, name: 'Topics' },
  { id: 'shelf', href: RouteLink.shelf, name: 'Shelf' },
  { id: 'editor', href: RouteLink.editor, name: 'Editor' },
  { id: 'bar', href: RouteLink.bar, name: 'Barista' },
  { id: 'customStyles', href: RouteLink.fancy, name: 'Custom Styles' },
  { id: 'workShop1', href: RouteLink.workShop, name: 'Work' },
  { id: 'internationalized', href: RouteLink.i18n, name: 'Internationalization' },
  { id: 'table', href: RouteLink.table, name: 'Table' },
];

export const BaseNavigation: React.FC<FcProps> = ( props ) => {
  // const preventDefault = ( event: React.SyntheticEvent ) => event.preventDefault();

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
