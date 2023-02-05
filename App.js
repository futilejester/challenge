import React from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { useState } from 'react';
import { Grid } from '@giphy/react-components';
import './App.css';

const giphyFetch = new GiphyFetch("ZsPZTXpka2gZyzBH3hsJsXPZLAhpuZ8e");

function App() {
  const [keyword, setKeyword] = useState("");

  const fetchGifs = (offset: number) =>
    giphyFetch.search(keyword, { offset, limit: 30 });

  return (
      <>
        <div className='BennsGiphy'>
          <h1>Benn's Giphy Page</h1>
          <h3>Type search text into the box</h3>
        </div>
        <div className='InputBox'>
          <input
            value={keyword}
            type="text"
            onChange={e => setKeyword(e.target.value)}
          />
        </div>
          <div className='ResultsArea'>
          <h4>Search results - powered by GIPHY</h4>
          < Grid width={1200} 
            columns={3} 
            fetchGifs={() => fetchGifs(5)}
            key={keyword}
            gutter={6}
          />
        </div>
      </>
  );
}
  export default App;
