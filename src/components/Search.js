import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('world of warcraft');
    const [results, setResults] = useState([]);

    useEffect(() => {
        //sync cannot be used with useEffect, so this helper neeeds to exist
       const search = async () => {
           const { data } = await axios.get('https://en.wikipedia.org/w/api.php',
           {
               params: {
                    action: "query",
                    list: "search",
                    format: "json",
                    origin: "*",
                    srsearch: term,
               }
           });
           setResults(data.query.search);
       };
       
       //on initial load we don't want to wait for a timeout
       if (term && !results.length) {
           search();
       } else {
            const timeoutId = setTimeout(() => {
                if (term) {
                    search();
                }
            }, 1000);

            //what is this witch craft? This function gets returned on initial render and gets invoked on RE-render
            return () => {
                clearTimeout(timeoutId);
            };
       }

    }, [term])

    const renderedResults = results.map((result) => {
        return(
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a 
                        className="button ui"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    {result.snippet}
                </div>
            </div>
        )
    })
    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        className="input"
                    />
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    )
}

export default Search;