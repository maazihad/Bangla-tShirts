import React from 'react';
import Friend from '../Friend/Friend';

const Cuosin = ({ children, hasFriend, ring }) => {
   return (
      <div>
         <h2>Cuosin</h2>
         <small>{children}</small>
         {hasFriend && <Friend ring={ring} />}
      </div>
   );
};

export default Cuosin;