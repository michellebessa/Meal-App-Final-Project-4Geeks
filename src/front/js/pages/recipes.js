import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { WeekDay, DailyMealPlanning } from "./codecleaner.js";

export const Recipes = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="mt-5">
      <div className="row">
        <div className="col">
          <li className="list-group-item" id="mealplanning">
            <h1>Recipes</h1>
            <p>
            </p>
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <DailyMealPlanning mealid="Maintenance Recipes">
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Bulk/Surplus">
                <input
                  className="inputmealplanner"
                  placeholder="Add an item to your list"
                ></input>
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Keto">
                <input
                  className="inputmealplanner"
                  placeholder="Add an item to your list"
                ></input>
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Vegetarian">
                <input
                  className="inputmealplanner"
                  placeholder="Add an item to your list"
                ></input>
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Pescatarian">
                <input
                  className="inputmealplanner"
                  placeholder="Add an item to your list"
                ></input>
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Vegan">
                <input
                  className="inputmealplanner"
                  placeholder="Add an item to your list"
                ></input>
              </DailyMealPlanning>
            </div>
          </li>
        </div>
      </div>
    </div>
	);

}
	