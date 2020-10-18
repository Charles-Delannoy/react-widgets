import React, { useState } from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript"
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library amonr engineers"
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components"
  }
];

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  }
];

const showDropdown = () => {
  // const [selected, setSelected] = useState(options[0]);

  if (window.location.pathname === '/dropdown') {
    return (
      <Dropdown
        // options={options}
        // label={'Select a color'}
        // selected={selected}
        // onSelectedChange={setSelected}
      />
    );
  }
};

const showComponent = (route, component) => {
  return window.location.pathname === route ? component : null;
};

export default () => {
  return (
    <div>
      {showComponent('/', <Accordion items={items}/>)}
      {showComponent('/list', <Search />)}
      {showDropdown()}
      {showComponent('/translate', <Translate />)}
    </div>
  );
};
