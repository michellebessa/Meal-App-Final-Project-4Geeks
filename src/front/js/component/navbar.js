import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  function handleLogOut() {
    sessionStorage.clear();
    navigate("/");
  }
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand h1">Meal it!</span>
        </Link>

        <Link to="/foodcategories">
          <span className="navbar-brand h1">Food Categories</span>
        </Link>

        <Link to="/pantry">
          <span className="navbar-brand h1">Pantry</span>
        </Link>

        <Link to="/mealplannershopping">
          <span className="navbar-brand h1">Meal Planner/Shopping list</span>
        </Link>

        <Link to="/recipes">
          <span className="navbar-brand h1">Recipes</span>
        </Link>

        <Link to="/contactus">
          <span className="navbar-brand h1">Contact Us</span>
        </Link>

        {store.token && store.token != "" && store.token != undefined ? (
          <Link to="/" className="navbar-brand h1" onClick={handleLogOut}>
            Logout
          </Link>
        ) : (
          <Link to="/login">
            <span className="navbar-brand h1">Login</span>
          </Link>
        )}

        {/* <Button as={Link} to="/login">
          Login
        </Button> */}
      </div>
    </nav>
  );
};
