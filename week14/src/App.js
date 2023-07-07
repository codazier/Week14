import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import MovieList from './Components/MovieList';


import Rating from './Components/Rating';



function App() {
  return (
    <div className="App">
      <h1>Movies Movies Movies!</h1>
      <header className="App-header">
       
   
      <MovieList />
        
       
        
        
        

        
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
  );
}

export default App;


//the main page will be a list of Movies.
// the user can click on a movie thumbnail  
    //and it will bring up the movie on another page
      // complete with 
        //mvoie data, 
        //rating
        // reviews, 
        //and the ability to leave a review