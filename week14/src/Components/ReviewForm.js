import React from 'react'
import {useState} from 'react'


export default function ReviewForm () {

  const [review, setReview] = React.useState('');
  const [reviews, setReviews] = React.useState([]);

 

   // function addText() {
       // setReview(prevForm => prevForm+1)
   // }

   function handleClick() {
    if (review.trim() !== '') {
        setReviews([...reviews, review]);
        setReview('');
      }
    
}

    return (
       <div className="card w-75">
        <div className="card-header bg-primary text-white">

        <div className="Form">
     
       
        
        <label>
        Leave a Review
      <textarea className="post-content" rows={4} cols={40} 
      value={review} // ...force the input's value to match the state variable...
      onChange={e => setReview(e.target.value)}
      />
    </label>
        
       
    <button onClick={handleClick}>Submit</button>
     </div>
      </div>
      <div className="review-container">
        <h3>Reviews:</h3>
        {reviews.map((reviewText, index) => (
          <p key={index}>{reviewText}</p>
        ))}
      </div>
    </div>
  );
}

