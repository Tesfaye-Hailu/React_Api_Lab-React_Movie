import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieDisplay from './Components/MovieDisplay';
import Form from './Components/Form';

function App() {
  const apiKey = 'c22f0343';

  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    const data = await response.json();
    setMovie(data);
  };

  useEffect(() => {
    getMovie('Titanic');
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;