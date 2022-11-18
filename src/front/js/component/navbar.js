import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Meal it!</span>
        </Link>
        <div className="ml-auto">
          <div className="btn-group dropstart">
            <a
              className="btn btn-secondary dropstart"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-bars" />
            </a>

            <ul className="dropdown-menu">
              <Link to="/foodexpiring">
                <li>
                  <a className="dropdown-item" href="#">
                    Food expiring
                  </a>
                </li>
              </Link>
              <Link to="/mealplanning">
                <li>
                  <a className="dropdown-item" href="#">
                    Meal planning/Shopping list
                  </a>
                </li>
              </Link>
              <Link to="/pantryscan">
                <li>
                  <a className="dropdown-item" href="#">
                    Pantry scan
                  </a>
                </li>
              </Link>
              <Link to="/recipes">
                <li>
                  <a className="dropdown-item" href="#">
                    Recipes
                  </a>
                </li>
              </Link>
              <li>
                <a className="dropdown-item" href="#">
                  About us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};