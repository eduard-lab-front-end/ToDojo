import logo from "../images/Logotodo.png";
import React from "react";
import App from "../App";
import "../global.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav style={{ width: "100%" }}>
        <Link to="/">
          <img src={logo} alt="Logotodo" style={{ width: "100px" }} />
        </Link>
      </nav>

      <div className="Navbar Title">
        <h1>To Do List Tools</h1>
      </div>
    </div>
  );
}
export default Navbar;
