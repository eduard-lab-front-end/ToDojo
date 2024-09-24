import logo from "../images/Logotodo.png";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const ItemDetails = () => {
  return (
    <div>
      <button>
        <Link to="/">
          <img src={logo} alt="Logotodo" className="h-8 w-auto" />
          Home
        </Link>
      </button>
      <h1>ItemDetails</h1>
      {/* Text */}
    </div>
  );
};

export default ItemDetails;
