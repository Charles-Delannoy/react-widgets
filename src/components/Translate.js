import React, { useState } from 'react';
import Dropdown from './Dropdown';

const options = [
  {
    language: "Afrikaans",
    value: "af"
  },
  {
    language: "Arabic",
    value: "ar"
  },
  {
    language: "Hindi",
    value: "hi"
  }
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0])

  return (
    <div>
      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
    </div>
  );
};

export default Translate;
