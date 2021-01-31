import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
    { 
        title: 'Why React?',
        content: 'Its got electrolytes'
    },
    {
        title: 'Why does it have electrolytes?',
        content: 'Its what engineers crave'
    },
    {
        title: 'Why do engineers crave it?',
        content: 'Because its got electrolytes?'
    }
]

const options = [
{
    label : 'The Color Red',
    value : 'red'
},
{
    label : 'The Color Green',
    value : 'green'
},
{
    label : 'A Shade of Blue',
    value : 'blue'
}];

export default () => {

    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            {/* <Accordion items={items}/> */}
            <Dropdown
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
            />
        </div>
    )
}