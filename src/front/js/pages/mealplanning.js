import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import {WeekDay, DailyMealPlanning} from "./codecleaner.js"
import {DailyMeal} from "./list.js"


// const handleKeyPress (e) => { 
//   if(e.key=="Enter")
//   { creatingToDos(userEntry) } 
// }


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
              <input className="inputmealplanner" placeholder="What are you having for breakfast?"></input>
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Lunch">
              <input className="inputmealplanner" placeholder="What are you having for lunch?"></input>
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Dinner">
              <input className="inputmealplanner" placeholder="What are you having for dinner?"></input>
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
              <DailyMealPlanning mealid="Healthy-Fat"><input className="inputmealplanner" placeholder="Add an item to your list"></input></DailyMealPlanning>
              <DailyMealPlanning mealid="Protein"><input className="inputmealplanner" placeholder="Add an item to your list"></input></DailyMealPlanning>
              <DailyMealPlanning mealid="Dairy"><input className="inputmealplanner" placeholder="Add an item to your list"></input></DailyMealPlanning>
              <DailyMealPlanning mealid="Grains-Carbohydrates"><input className="inputmealplanner" placeholder="Add an item to your list"></input></DailyMealPlanning>
              <DailyMealPlanning mealid="Vegetables"><input className="inputmealplanner" placeholder="Add an item to your list"></input></DailyMealPlanning>
              <DailyMealPlanning mealid="Fruits"><input className="inputmealplanner" placeholder="Add an item to your list"></input></DailyMealPlanning>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
};
