import React, { useState } from 'react';
import Header from './Header';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Route from './Route'

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
  },
  {
    title: "Why am I here?",
    content: "To learn REACT"
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

export default () => {
  const [selected, setSelected] = useState(options[0])

  return (
    <div>
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          options={options}
          label={'Select a color'}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
};
