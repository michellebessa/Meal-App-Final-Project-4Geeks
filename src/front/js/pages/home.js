import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import pictureProjectUrl from "../../img/project-pic.jpg";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mt-5">
      <div className="float-container">
        <div className="float-start ms-5 mt-5">
          <p>
            <div className="foodexptitle">
              <h3>
                <p>
                  Our goal is to help you organize your food items so you stop
                  wasting it, and organize your meals schedule.
                </p>
                <p>
                  Do it easily by following the categories from the{" "}
                  <strong>Food Pyramid!</strong>
                </p>
                <p>
                  What does <strong>Food Pyramid</strong> means?
                </p>
                <p>Click here to learn more!</p>
              </h3>

              <div></div>
            </div>
          </p>
        </div>
        <div>
          <img
            className="float-end me-5 mt-5"
            src="https://miro.medium.com/max/1200/1*hWWewefMOsKjve8b6O6Egw.jpeg"
          />
        </div>
      </div>
    </div>
  );
};
