//import React from 'react'

export default function Movie(props) {
   
    return (
        <div className="card w-75">
           <div className="card-header bg-primary text-white">
                
                 <div className="contact-card">

                 <h3>{props.title}</h3>
                <div className="info-group">
                    <img src={props.image} alt="" />
                    <p>{props.synopsis}</p>
                     <p>{props.date}</p>
                     <p>{props.director}</p>
                     <p>{props.starring}</p>
               

               
               
               
               
               
                

                
            
             </div>
            </div> 
        </div>
        </div>








        
    
        
    )
}


