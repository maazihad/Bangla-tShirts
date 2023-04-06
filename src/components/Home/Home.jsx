import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
   const tShirts = useLoaderData();
   console.log(tShirts);
   return (
      <div>
         <h2>Total Shirts : {tShirts.length}</h2>
      </div>
   );
};

export default Home;