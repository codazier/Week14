

//import React from 'react'
//i//mport MovieList from 'MovieList'

import React from 'react'
import Movie from './Movie'
import Rating from './Rating'
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'

export default function MovieList(props) {
   
    return (
        
        <div className="List">
            
           
                
                 <Movie
title="Spider-Man: No Way Home"


image="https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg" 
synopsis="With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man."
date="Date: 2021"
director="Directed by: John Watts"
starring="Starring: 



Tom Holland,
Zendaya,
Benedict Cumberbatch,
Jacob Batalon,
Jon Favreau,
Jamie Foxx,
Willem Dafoe,
Alfred Molina,
Benedict Wong,
Tony Revolori,
Marisa Tomei,
Andrew Garfield,
Tobey Maguire

"
/>

<Rating />
        <ReviewList />
        <ReviewForm />

<Movie
title="Transformers"
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

<Rating />
        <ReviewList />
        <ReviewForm />

<Movie
  title="Forrest Gump"
  image="https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg"
  synopsis="The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart."
  date="Date: 1994"
  director="Directed by: Robert Zemeckis"
  starring="Starring: Tom Hanks, Rebecca Williams, Sally Field, Michael Conner Humphreys"
/>

<Rating />
        <ReviewList />
        <ReviewForm />
<Movie
title="Hunger Games"
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

               
               
<Rating />
        <ReviewList />
        <ReviewForm />          
               
               
               
                </div>

                
            
            
       








        
    
        
    )
}

