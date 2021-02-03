import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from './Convert'

const languages = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Japanese",
    value: "ja"
  }
];

const Translate = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="input">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        options={languages}
        selected={selectedLanguage}
        onSelectedChange={setSelectedLanguage}
      />
      <hr />
    <h3 className="ui header">Output</h3>
    <Convert text={text} language={selectedLanguage} />
    </div>
  );
};

export default Translate;
