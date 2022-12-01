import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { WeekDay, DailyMealPlanning } from "./codecleaner.js";

export const MealPlanning = () => {
  const { store, actions } = useContext(Context);

  const [breakfast, setBreakfast] = useState([]);
  const [breakfastInput, setBreakfastInput] = useState("");
  const [lunch, setLunch] = useState([]);
  const [lunchInput, setLunchInput] = useState("");
  const [dinner, setDinner] = useState([]);
  const [dinnerInput, setDinnerInput] = useState("");

  const handleSubmit = (event, meal) => {
    if (meal == "breakfast" && breakfastInput) {
      setBreakfast([...breakfast, breakfastInput]);
      setBreakfastInput("");
      console.table(breakfast);
    } else if (meal == "lunch" && lunchInput) {
      setLunch([...lunch, lunchInput]);
      setLunchInput("");
      console.table(lunch);
    } else if (meal == "dinner" && dinnerInput) {
      setDinner([...dinner, dinnerInput]);
      setDinnerInput("");
      console.table(dinner);
    }
  };

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
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    handleSubmit(event, "breakfast");
                  }}
                >
                  <input
                    className="inputmealplanner"
                    placeholder="What are you having for breakfast?"
                    value={breakfastInput}
                    onChange={(event) => {
                      setBreakfastInput(event.target.value);
                    }}
                  ></input>
                </form>
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Lunch">
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    handleSubmit(event, "lunch");
                  }}
                >
                  <input
                    className="inputmealplanner"
                    placeholder="What are you having for lunch?"
                    value={lunchInput}
                    onChange={(event) => {
                      setLunchInput(event.target.value);
                    }}
                  ></input>
                </form>
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Dinner">
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    handleSubmit(event, "dinner");
                  }}
                >
                  <input
                    className="inputmealplanner"
                    placeholder="What are you having for dinner?"
                    value={dinnerInput}
                    onChange={(event) => {
                      setDinnerInput(event.target.value);
                    }}
                  ></input>
                </form>
                <input
                  className="inputmealplanner"
                  placeholder="What are you having for dinner?"
                ></input>
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
              <DailyMealPlanning mealid="Healthy-Fat">
                <input
                  className="inputmealplanner"
                  placeholder="Add an item to your list"
                ></input>
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Protein">
                <input
                  className="inputmealplanner"
                  placeholder="Add an item to your list"
                ></input>
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Dairy">
                <input
                  className="inputmealplanner"
                  placeholder="Add an item to your list"
                ></input>
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Grains-Carbohydrates">
                <input
                  className="inputmealplanner"
                  placeholder="Add an item to your list"
                ></input>
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Vegetables">
                <input
                  className="inputmealplanner"
                  placeholder="Add an item to your list"
                ></input>
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Fruits">
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
};
