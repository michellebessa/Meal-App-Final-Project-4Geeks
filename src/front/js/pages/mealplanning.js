import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import {WeekDay, DailyMealPlanning} from "./codecleaner.js"


export const MealPlanning = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mt-5">
      <div className="row">
        <div className="col">
          <li className="list-group-item" id="mealplanning">
            <h1>Daily Meal Planner</h1>
            <p>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select Week Day
                </button>
                <ul className="dropdown-menu">
                  <WeekDay day="Monday" />
                  <WeekDay day="Tuesday" />
                  <WeekDay day="Wednesday" />
                  <WeekDay day="Thursday" />
                  <WeekDay day="Friday" />
                  <WeekDay day="Saturday" />
                  <WeekDay day="Sunday" />
                </ul>
              </div>
            </p>
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <DailyMealPlanning mealid="Breakfast">
                Early Meal of the day
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Lunch">
                Middle Meal of the day
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Dinner">
                Final Meal of the day
              </DailyMealPlanning>
            </div>
          </li>
        </div>
        <div className="col">
          <li className="list-group-item" id="mealplanning">
            <h1>Shopping List</h1>
            <p>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select Week Day
                </button>
                <ul className="dropdown-menu">
                  <WeekDay day="Monday" />
                  <WeekDay day="Tuesday" />
                  <WeekDay day="Wednesday" />
                  <WeekDay day="Thursday" />
                  <WeekDay day="Friday" />
                  <WeekDay day="Saturday" />
                  <WeekDay day="Sunday" />
                </ul>
              </div>
            </p>
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <DailyMealPlanning mealid="Healthy-Fat"></DailyMealPlanning>
              <DailyMealPlanning mealid="Protein"></DailyMealPlanning>
              <DailyMealPlanning mealid="Dairy"></DailyMealPlanning>
              <DailyMealPlanning mealid="Grains-Carbohydrates"></DailyMealPlanning>
              <DailyMealPlanning mealid="Vegetables"></DailyMealPlanning>
              <DailyMealPlanning mealid="Fruits"></DailyMealPlanning>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
};
