import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import pictureProjectUrl from "../../img/project-pic.jpg";
import { FoodExpiring } from "./foodexpiring";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="row">
      <div className="col">
        <div className="imghome">
          <img
            id="imghome"
            src="https://miro.medium.com/max/1200/1*hWWewefMOsKjve8b6O6Egw.jpeg"
          />
        </div>
        <div className="homedescription">
          <h3>
            <p className="hometitle">Our main goal is to stop food waste!</p>
            <p>
              {" "}
              To achieve this, we will help your organize your food items at
              home. That will not only help you decrease food waste, but will
              make your life much easier, once you will know what items you need
              to shop.
            </p>
            <p>
              How do we help you organize your food items? A practical way is by
              separating your food items by food categories.
            </p>
            <Link to="/foodexpiring">
              <span className="m-auto">Click here to learn more!</span>
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};
