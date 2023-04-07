import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ ring }) => {

   const anta = useContext(RingContext);

   return (
      <div>
         <h2>Special</h2>
         <p><small>{anta}</small></p>
      </div>
   );
};

export default Special;