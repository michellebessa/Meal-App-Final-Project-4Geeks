import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Meal it!</span>
        </Link>

        <Link to="/foodexpiring">

        <span className="navbar-brand mb-0 h1">Food Pyramid</span>

        </Link>

        <Link to="/mealplanning">
        <span className="navbar-brand mb-0 h1">Shopping list</span>
        </Link>

        <Link to="/pantryscan">
        <span className="navbar-brand mb-0 h1">Pantry Scan</span>
        </Link>

        <Link to="/recipes">
        <span className="navbar-brand mb-0 h1">Recipes</span>
        </Link>

        <Link to="/">
        <span className="navbar-brand mb-0 h1">About us</span>
        </Link>
      </div>
    </nav>
  );
};
