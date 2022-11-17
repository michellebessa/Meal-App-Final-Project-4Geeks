import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mt-5">
      <div className="float-container">
        <div className="float-start ms-5">
          <h1>Introduction</h1>
          <p>We want to make your life easier, planning your meal, 
            saving your time and upgrading your health!
             And of course, no more wasting food!
             We have created a sophisticated, smarter way for eating! 
             Wanna save your time? Let’s do it!
             Love saving food? We got what you need!
             Plan your meal, save your time, upgrade your life.</p>
        </div>
        <div>
          <h1 className="float-end me-5">Picture/Pictures</h1>
          <img src="https://img.freepik.com/free-vector/food-pyramid-template-concept_23-2148507114.jpg"/>
        </div>
      </div>
    </div>
  );
};
