import React from 'react';
import './TShirt.css';

const TShirt = ({ tshirt, handleBuyNow }) => {
   return (
      <div className='single-shirt'>
         <img src={tshirt.picture} alt="" />
         <h3>{tshirt.name}</h3>
         <p>Price : {tshirt.price}</p>
         <button onClick={() => handleBuyNow(tshirt)}>Buy now</button>
      </div>
   );
};

export default TShirt;