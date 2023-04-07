import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {

   const [money, setMoney] = useContext(MoneyContext);
   return (
      <div>
         <h2>Sister</h2>
         <h5>Grapnpa MOney : {money}</h5>
      </div>
   );
};

export default Sister;