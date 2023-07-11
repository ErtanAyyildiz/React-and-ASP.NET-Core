import React from 'react';
import logo from './logo.svg';
import './App.css';
import { movieDTO } from './movies/movies.model';
import IndividualMovie from './movies/IndividualMovie';

function App() {

  const testMovie:movieDTO={
    id:1,
    title:'Spider-Man: Far from Home',
    poster:'https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/Spider-Man-FarFromHome-rating.jpg?itok=CGe-MMMn'
  }
  return (
    <>
      <IndividualMovie {...testMovie} />
    </>
  )
}

export default App;
