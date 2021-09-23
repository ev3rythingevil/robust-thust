import { useState } from 'react';

function CakeCard({cake , setSelectedCake}){

    
      return(
          <div onClick={() => setSelectedCake(cake)}>    
           <h1>{cake.flavor}</h1> 
           <h1>{cake.price}</h1>
           <p>{cake.size}</p>
          </div>
     )
 }
 
export default CakeCard