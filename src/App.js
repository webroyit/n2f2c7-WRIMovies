import React from 'react';
import './App.css';

import requests from './requests';
import Row from './components/Row';

function App() {
  return (
    <div className="App">
      <h1>WRI Movies</h1>
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
    </div>
  );
}

export default App;
