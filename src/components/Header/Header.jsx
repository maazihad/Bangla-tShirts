import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
   return (

      <nav>
         <Link to='/'>Home</Link>
         <Link to='/about'>About</Link>
         <Link to='/checkout'>Checkout</Link>
         <Link to='/login'>Login</Link>
         <Link to='/grandpa'>Granpa</Link>
      </nav>

   );
};

export default Header;