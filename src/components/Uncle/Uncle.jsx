import React, { useContext } from 'react';
import Cuosin from '../Cuosin/Cuosin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
   const [money, setMoney] = useContext(MoneyContext);

   return (
      <div>
         <h2>Uncle</h2>
         <p><small>Grandpa Money : {money}</small></p>
         <button onClick={() => setMoney(money + 1000)}>Send 1000k</button>
         <section className="flex">
            <Cuosin>Nabil</Cuosin>
            <Cuosin>Nabila</Cuosin>
         </section>
      </div>
   );
};

export default Uncle;