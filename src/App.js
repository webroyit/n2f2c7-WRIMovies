import React from 'react';
import './App.css';

import requests from './requests';
import Row from './components/Row';

function App() {
  return (
    <div className="App">
      <h1>WRI Movies</h1>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
    </div>
  );
}

export default App;
