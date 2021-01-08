import React from 'react';
import Accordion from './components/Accordion';

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

export default () => {
    return (
        <div>
            <Accordion items={items}/>
        </div>
    )
}