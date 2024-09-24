import logo from "../images/Logotodo.png";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <button>
        <Link to="/">
          <img src={logo} alt="Logotodo" className="h-8 w-auto" />
          Home
        </Link>
      </button>
      <h1>About</h1>
      <p>Project description and team information.</p>
      {/* Add links of interest */}
    </div>
  );
};

export default About;
