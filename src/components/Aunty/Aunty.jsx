import React from 'react';
import Cuosin from '../Cuosin/Cuosin';

const Aunty = ({ ring }) => {
   return (
      <div>
         <h2>Aunty</h2>
         <section className='flex'>
            <Cuosin>Abir</Cuosin>
            <Cuosin hasFriend={true} ring={ring}>Probir</Cuosin>
         </section>
      </div>
   );
};

export default Aunty;