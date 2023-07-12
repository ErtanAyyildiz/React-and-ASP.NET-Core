import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { landingPageDTO, movieDTO } from './movies/movies.model';
import IndividualMovie from './movies/IndividualMovie';
import MoviesList from './movies/MoviesList';

function App() {

  const [movies,setMovies]=useState<landingPageDTO>({});

  useEffect(()=>{
    const timerId=setTimeout(()=>{
      setMovies({
        inTheaters: [{
          id:1,
          title:'Spider-Man: Far from Home',
          poster:'https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/Spider-Man-FarFromHome-rating.jpg?itok=CGe-MMMn'
        },
        {
          id:2,
          title:'Luca',
          poster:'https://e1.pxfuel.com/desktop-wallpaper/859/315/desktop-wallpaper-new-posters-from-pixar-s-luca-luca-disney-pixar.jpg'
        }],
        upcomingReleases: [
          {
            id:3,
            title:'Soul',
            poster:'https://tr.web.img3.acsta.net/pictures/20/10/15/09/50/1139231.jpg'
          }
        ]
      })
    },1000)

    return ()=> clearTimeout(timerId)
  })


  return (
    <>
      {/* <IndividualMovie {...testMovie} /> */}
      <h3>In Theaters</h3>
      <MoviesList movies={movies.inTheaters}/>
      <h3>Upcoming Releases</h3>
      <MoviesList movies={movies.upcomingReleases}/>
    </>
  )
}

export default App;
