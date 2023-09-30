import React, { useState, useEffect } from 'react';
import './App.css';
import Movies from './components/Movies';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `https://movie-app.azurewebsites.net/movie/search`;

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ search: searchValue, searchFields: ['title', 'genres'], top: 30 })
    };

    const result = await fetch(url, requestOptions);
    const json = await result.json();
    if (json) {
      setMovies(json);
    }
  };

  useEffect(() => {
      getMovieRequest(searchValue.length > 0 ? searchValue : "2023");
  }, [searchValue]);

  return (
    <div className='body container-fluid'>
          <Header />
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          <Movies movies={movies} />
    </div>
  );
};

export default App;
