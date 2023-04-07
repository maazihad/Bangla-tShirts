import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css';
import toast from 'react-hot-toast';


const Home = () => {
   const tShirts = useLoaderData();

   const [cart, setCart] = useState([]);

   const handleBuyNow = tShirt => {
      const exist = cart.find(ts => ts._id === tShirt._id);
      if (exist) {
         toast("This is already exists.");
      }
      else {
         const newCart = [...cart, tShirt];
         setCart(newCart);
      }

   };

   const removeFromCart = id => {

      const remaining = cart.filter(tShirt => tShirt._id !== id);
      setCart(remaining);

   };

   return (
      <div className="shop-container">
         <div className='shirt-container'>
            {
               tShirts.map(shirt => <TShirt
                  key={shirt._id}
                  tshirt={shirt}
                  handleBuyNow={handleBuyNow}
               ></TShirt>)
            }
         </div>
         <div className='cart-container'>
            <Cart cart={cart} removeFromCart={removeFromCart} />
         </div>
      </div>
   );
};

export default Home;