import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, label, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (!ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
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
        <div style={{fontWeight: 'bold', color: selected.value, marginTop: '8px'}} >{`This text is ${selected.value}`}</div>
      </div>
    </div>
  );
};

export default Dropdown;
