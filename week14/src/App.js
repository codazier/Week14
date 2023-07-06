import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Movie from './Components/Movie'
import MovieList from './Components/MovieList'
import ReviewForm from './Components/ReviewForm'
import ReviewList from './Components/ReviewList';
import Reviews from './Components/Reviews';
import Rating from './Components/Rating';



function App() {
  return (
    <div className="App">
      <h1>Movies Movies Movies!</h1>
      <header className="App-header">
       
      <Movie 
        title="Title: Spider-Man: No Way Home"
        
      
        image="https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg"
        synopsis="With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man."
        date="Date: 2021"
        director="Directed by: John Watts"
        starring="Starring: 

        

    Tom Holland
    Zendaya
    Benedict Cumberbatch
    Jacob Batalon
    Jon Favreau
    Jamie Foxx
    Willem Dafoe
    Alfred Molina
    Benedict Wong
    Tony Revolori
    Marisa Tomei
    Andrew Garfield
    Tobey Maguire

"
        />
        
        <Rating />
        <ReviewList />
        <ReviewForm />
        <Movie 
        title="Title: Transformers"
        image="https://upload.wikimedia.org/wikipedia/en/6/66/Transformers07.jpg"
        synopsis="An ancient struggle between two Cybertronian races, the heroic Autobots and the evil Decepticons, comes to Earth, with a clue to the ultimate power held by a teenager."
        date="Date: 2007"
        director="Directed by: Michael Bay"
        starring="Starring:	

        Hugo Weaving,
        Shia LaBeouf,
        Tyrese Gibson,
        Josh Duhamel,
        Anthony Anderson,
        Megan Fox,
        Peter Cullen"
        />
       
        <ReviewForm />

        <Movie 
          title="Title: Forrest Gump"
          image="https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg"
          synopsis="The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart."
          date="Date: 1994"
          director="Directed by: Robert Zemeckis"
          starring="Starring: Tom Hanks, Rebecca Williams, Sally Field, Michael Conner Humphreys"
        />
        <ReviewForm />

        <Movie 
        title="Title: Hunger Games"
        image="https://upload.wikimedia.org/wikipedia/en/4/42/HungerGamesPoster.jpg"
        synopsis="Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games: a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death."
        date="Date: 2012"
        director="Directed by: Gary Ross"
        starring="Starring: 

        Jennifer Lawrence,
        Josh Hutcherson,
        Liam Hemsworth,
        Woody Harrelson,
        Elizabeth Banks,
        Lenny Kravitz,
        Stanley Tucci,
        Donald Sutherland"
        />
        <ReviewForm />

        

        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>sup</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
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