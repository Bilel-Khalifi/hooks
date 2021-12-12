import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route,useParams } from "react-router-dom";
import './App.css';
import React from 'react';
import MovieCard from './MovieCard';
import MovieTrailer from "./MovieTrailer";
import AddMovie from './AddMovie';
import {Moviesdata} from './MovieList';
import { Link } from 'react-router-dom';

const App = ()=> {
  
  const [movies, setMovies] = useState(Moviesdata);
  const [SearchName, setSearchName] = useState("");
  const [SearchRating, setSearchRating] = useState(0);
  console.log(SearchRating);
  const Add = (myMovie) => {
    setMovies([...movies, myMovie]); 
  }
  return (
    <Router>
    <Link to='/' className="btn btn-outline-primary">Home</Link>
    <div className="container">
      <div className="row">
        <label>Filter By: </label>
        <input value={SearchName} type="text" placeholder="Name" onChange={ e => setSearchName
          (e.target.value ) } />
        <input value={SearchRating} type="number" placeholder="Rating" onChange={e => setSearchRating(e.target.value)} />
      </div>
      <center>
       <AddMovie Add={Add} />
      </center> 
    </div>
    <Routes>    
      
      <Route exact element={ 
      
      <MovieCard Data={ movies.filter(e=>e.title.toLowerCase().includes(SearchName.toLowerCase())) ||  movies.filter(e=>e.rating === SearchRating)  } />}  
      path="/">
      </Route>
    <React.Fragment>

    <Route exact path={`/description/:id`} element={ <MovieTrailer data={movies} /> } >
    </Route>
  
      </React.Fragment>
      </Routes>
  </Router>
  );
}

export default App;

//   const myfilter= () => {
//   if(SearchName!== "") {  
//     return movies.filter(e=>e.title.toLowerCase().includes(SearchName.toLowerCase()));
//   } 
//   else if (SearchRating !== "") { 
//     return  movies.filter(e => e.rating === SearchRating);
//   }
//   else
//   {
//      return  movies;
//   }  
// }
//movies.filter(e=>e.title.toLowerCase().includes(SearchName.toLowerCase())) ||
//const filteredMovies = (
 // if(SearchName!= "") {  movies.filter(e=>e.title.toLowerCase().includes(SearchName.toLowerCase())} else if () || movies.filter(e=>e.rating === SearchRating)  )  : movies;