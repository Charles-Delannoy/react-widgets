import React from 'react';
import Accordion from './Accordion';

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

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
