import React from 'react';
import './Cart.css';

const Cart = ({ cart, removeFromCart }) => {

   let message;
   if (cart.length === 0) {
      message = <p>There not add any product here.</p>;
   }
   else {
      message = <div>
         <h4>wasting your mony ?</h4>

      </div>;
   }
   return (
      <div>
         <h2 className={cart.length === 1 ? 'red' : 'blue'}>Order Summary length : {cart.length}</h2>
         <h3 className={`bold border ${cart.length === 4 ? 'green' : 'purple'}`}>Order Something</h3>
         {
            cart.length > 2 ? <h3>Aaro kin </h3> : <h2>Fokira</h2>
         }

         {message}

         {
            cart.length === 2 && <p>Huurray! you win</p>
         }
         {
            cart.map(tShirt => <p
               key={tShirt._id}
            >{tShirt.name} <button onClick={() => removeFromCart(tShirt._id)}>x</button></p>)
         }
         {
            cart.length == 3 || <h2>Tinta tho hoilona !!!</h2>
         }
      </div>
   );
};

export default Cart;

/**
 * 
*/