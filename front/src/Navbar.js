import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { useGlobalContext } from "./context";
const Navbar = () => {
  const { amount } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h3>useReducer</h3>
        <div className="nav-container">
          <FiShoppingBag size={32} />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
