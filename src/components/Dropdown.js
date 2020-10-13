import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, label, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
      document.body.addEventListener('click', (event) => {
        if (!ref.current.contains(event.target)) {
          setOpen(false);
        }
      });
    }, []);

  const renderedOptions = options.map((option) => {
    if ((option === selected)) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
      {option.label}
      </div>
    );
  });

  return (
    <div className='ui form'>
      <div className='field'>
        <label className="label">{label}</label>
        <div
          ref={ref}
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
          id="my-dropdown"
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible' : ''} transition`} >
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
