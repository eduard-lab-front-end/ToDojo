import logo from "../images/Logotodo.png";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <button>
        <Link to="/">
          <img src={logo} alt="Logotodo" className="h-8 w-auto" />
          Home
        </Link>
      </button>
      <h1>Dashboard</h1>
      {/* Text */}
    </div>
  );
};

export default Dashboard;
