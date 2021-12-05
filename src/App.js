import { useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import AddMovie from './AddMovie';
import {Moviesdata} from './MovieList';

const App = ()=> {
  const [movies, setMovies] = useState(Moviesdata);
  const [SearchName, setSearchName] = useState("");
  const [SearchRating, setSearchRating] = useState(0);
  console.log(SearchRating);
  const Add = (myMovie) => {
    setMovies([...movies, myMovie]); 
  }

  const myfilter= () => {
  if(SearchName!== "") {  
    return movies.filter(e=>e.title.toLowerCase().includes(SearchName.toLowerCase()));
  } 
  else if (SearchRating !== "") { 
    return  movies.filter(e => e.rating === SearchRating);
  }
  else
  {
     return  movies;
  }  
}
//movies.filter(e=>e.title.toLowerCase().includes(SearchName.toLowerCase())) ||
//const filteredMovies = (
 // if(SearchName!= "") {  movies.filter(e=>e.title.toLowerCase().includes(SearchName.toLowerCase())} else if () || movies.filter(e=>e.rating === SearchRating)  )  : movies;
  return (
    <div className="container">
      <div className="row">
        <label>Filter By: </label>
        <input value={SearchName} type="text" placeholder="Name" onChange={ e => setSearchName
          (e.target.value ) } />
        <input value={SearchRating} type="number" placeholder="Rating" onChange={e => setSearchRating(e.target.value)} />
        <MovieCard Data={ movies.filter(e=>e.title.toLowerCase().includes(SearchName.toLowerCase())) ||  movies.filter(e=>e.rating == SearchRating)  } />

      </div>
      <center>
       <AddMovie Add={Add} />
      </center> 
    </div>
  );
}

export default App;
