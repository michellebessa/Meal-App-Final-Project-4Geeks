import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const MealPlanning = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mt-5">
      <div className="float-container">
        <div className="float-start ms-5">
          <h1>Daily Meal Planner</h1>
          <h2>Breakfast</h2>
          <h2>Lunch</h2>
          <h2>Dinner</h2>
        </div>
        <div>
          <div className="float-end me-5">
            <h1>Shopping List</h1>
            <h2>Breakfast</h2>
            <h2>Lunch</h2>
            <h2>Dinner</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
