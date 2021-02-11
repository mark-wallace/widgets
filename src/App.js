import React, { useState } from "react";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Header from "./components/Header";
import Timer from "./components/Timer";

const items = [
  {
    title: "Why React?",
    content: "Its got electrolytes",
  },
  {
    title: "Why does it have electrolytes?",
    content: "Its what engineers crave",
  },
  {
    title: "Why do engineers crave it?",
    content: "Because its got electrolytes?",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, onSelectedChange] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          label="Select a Color"
          selected={selected}
          onSelectedChange={onSelectedChange}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/timer">
        <Timer />
      </Route>
    </div>
  );
};

export default App;
