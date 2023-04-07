import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';


export const RingContext = createContext('Golder Ring');
export const MoneyContext = createContext(0);
const Grandpa = () => {

   const ring = "Golden Ring";

   const [money, setMoney] = useState(0);


   return (
      <div className='grandpa'>
         <h1>Grandpa</h1>
         <h2>HasMoney = {money}</h2>
         <MoneyContext.Provider value={[money, setMoney]} >
            <RingContext.Provider value="Bhango boltu">
               <section className="flex">
                  <Father ring={ring} />
                  <Uncle />
                  <Aunty ring={ring} />
               </section>
            </RingContext.Provider>
         </MoneyContext.Provider>
      </div>
   );
};

export default Grandpa;