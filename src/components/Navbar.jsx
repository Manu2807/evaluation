import React from "react";
import {Link} from "react-router-dom"
// use react-router Link or NavLink

import { CartContext } from "../context/CartContext";
const Navbar = () => {
  const{count,setCount}=React.useContext(CartContext)
  return (
    <div data-cy="navbar">
      
      <Link data-cy="navbar-home-link" to="/"> Home</Link>
      <span data-cy="navbar-cart-items-count">{count}</span>
      <button data-cy="navbar-login-logout-button">Log-in</button>
      
    </div>
  );
};

export default Navbar;
