import React from 'react';
import Link from './Link';

const Header = () => {
  const components = [
    {
      name: "Accordion",
      path: "/"
    },
    {
      name: "Search",
      path: "/list"
    },
    {
      name: "Dropdown",
      path: "/dropdown"
    },
    {
      name: "Translate",
      path: "/translate"
    }
  ];

  const renderedComponent = components.map((component) => {
    return (
      <Link key={component.name} href={component.path} className='item'>
        {component.name}
      </Link>
    );
  });

  return (
    <div className='ui secondary pointing menu'>
      {renderedComponent}
    </div>
  );
};

export default Header;
