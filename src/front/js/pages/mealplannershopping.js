import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { mealPlannerApi, mealShopApi } from "../component/api";
import { Context } from "../store/appContext";
import { WeekDay, DailyMealPlanning } from "./codecleaner.js";
import "../../styles/mealplannershopping.css";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Datepicker, Button, Page, setOptions } from "@mobiscroll/react";

export const MealPlannerShopping = () => {
  const { store, actions } = useContext(Context);

  // Here are the hooks for the weekly meals accordion
  const [breakfast, setBreakfast] = useState([]);
  const [breakfastInput, setBreakfastInput] = useState("");
  const [lunch, setLunch] = useState([]);
  const [lunchInput, setLunchInput] = useState("");
  const [dinner, setDinner] = useState([]);
  const [dinnerInput, setDinnerInput] = useState("");
  //  Here are the hooks for the shopping list accordion
  const [healthyfat, setHealthyFat] = useState([]);
  const [healthyfatInput, setHealthyFatInput] = useState("");
  const [protein, setProtein] = useState([]);
  const [proteinInput, setProteinInput] = useState("");
  const [dairy, setDairy] = useState([]);
  const [dairyInput, setDairyInput] = useState("");
  const [grainscarbohydrates, setGrainscarbohydrates] = useState([]);
  const [grainscarbohydratesInput, setGrainscarbohydratesInput] = useState("");
  const [vegetables, setVegetables] = useState([]);
  const [vegetablesInput, setVegetablesInput] = useState("");
  const [fruits, setFruits] = useState([]);
  const [fruitsInput, setFruitsInput] = useState("");
  const [all, setAll] = useState([]);
  const [allInput, setAllInput] = useState("");

  const submitMeal = (breakfast1, lunch1, dinner1, day1) => {
    const data = {
      days_of_the_week: day1,
      breakfast: breakfast1,
      lunch: lunch1,
      dinner: dinner1,
    };
    console.log(all);

    return (
      mealPlannerApi(data),
      setBreakfast([]),
      setLunch([]),
      setDinner([]),
      setDay(["Select Week Day"])
    );
  };

  const submitShop = (
    healthyfat1,
    protein1,
    dairy1,
    grainscarbohydrates1,
    vegetables1,
    fruits1,
    all1,
    dayshop1
  ) => {
    const data = {
      days_of_the_week: dayshop1,
      healthyfat: healthyfat1,
      protein: protein1,
      dairy: dairy1,
      grainscarbohydrates: grainscarbohydrates1,
      vegetables: vegetables1,
      fruits: fruits1,
      all: all1,
    };

    return (
      mealShopApi(data),
      setHealthyFat([]),
      setProtein([]),
      setDairy([]),
      setGrainscarbohydrates([]),
      setVegetables([]),
      setFruits([]),
      setAll([]),
      setDayShop(["Select Week Day"])
    );
  };

  const handleSubmit = (event, meal) => {
    if (event.keyCode == 13) {
      //react hooks for daily meal planner accordion
      setBreakfast([...breakfast, breakfastInput]);
      setLunch([...lunch, lunchInput]);
      setDinner([...dinner, dinnerInput]);
      //react hooks for shopping list accordion
      setHealthyFat([...healthyfat, healthyfatInput]);
      setProtein([...protein, proteinInput]);
      setDairy([...dairy, dairyInput]);
      setGrainscarbohydrates([
        ...grainscarbohydrates,
        grainscarbohydratesInput,
      ]);
      setVegetables([...vegetables, vegetablesInput]);
      setFruits([...fruits, fruitsInput]);
      setAll([...vegetables, vegetablesInput]);
      console.log(all);
    }
    //Here are the handleSubmit for the weekly meals accordion
    else if (meal == "breakfast" && breakfastInput) {
      setBreakfast([...breakfast, breakfastInput]);
      setBreakfastInput("");
    } else if (meal == "lunch" && lunchInput) {
      setLunch([...lunch, lunchInput]);
      setLunchInput("");
    } else if (meal == "dinner" && dinnerInput) {
      setDinner([...dinner, dinnerInput]);
      setDinnerInput("");
      //Here are the handleSubmit for the shopping list accordion
    } else if (meal == "healthyfat" && healthyfatInput) {
      setHealthyFat([...healthyfat, healthyfatInput]);
      setHealthyFatInput("");
    } else if (meal == "protein" && proteinInput) {
      setProtein([...protein, proteinInput]);
      setProteinInput("");
    } else if (meal == "dairy" && dairyInput) {
      setDairy([...dairy, dairyInput]);
      setDairyInput("");
    } else if (meal == "grainscarbohydrates" && grainscarbohydratesInput) {
      setGrainscarbohydrates([
        ...grainscarbohydrates,
        grainscarbohydratesInput,
      ]);
      setGrainscarbohydratesInput("");
    } else if (meal == "vegetables" && vegetablesInput) {
      setVegetables([...vegetables, vegetablesInput]);
      setVegetablesInput("");
    } else if (meal == "fruits" && fruitsInput) {
      setFruits([...fruits, fruitsInput]);
      setFruitsInput("");
    } else if (meal == "all" && allInput) {
      setAll([...all, allInput]);
      setAllInput("");
    }
  };
  console.log(all);

  return (
    <div className="mt-5">
      <div className="row">
        <div className="col">
          <li className="list-group-item" id="dailymealplanner">
            <p className="dailymealplannerdescription">
              <strong>
                Use our Daily Meal Planner to organize your daily meals!
              </strong>
            </p>
            <h1>Daily Meal Planner</h1>
            <p>
              <h4>
                <i class="fas fa-calendar"></i>
                <input type="date"></input>
              </h4>
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
                  {/*this button is for sending an item to the array list */}
                  {/* <button onClick={handleSubmit("breakfast")}>Test</button> */}
                </form>
                {breakfast.map((meal) => {
                  return (
                    <ul className="m-0">
                      <li className="mealmap">{meal}</li>
                    </ul>
                  );
                })}
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
                {lunch.map((meal) => {
                  return (
                    <ul className="m-0">
                      <li className="mealmap">{meal}</li>
                    </ul>
                  );
                })}
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
                {dinner.map((meal) => {
                  return (
                    <ul className="m-0">
                      <li className="mealmap">{meal}</li>
                    </ul>
                  );
                })}
              </DailyMealPlanning>
              <button
                className="mt-2"
                onClick={() => submitMeal(breakfast, lunch, dinner, day)}
              >
                Save
              </button>
            </div>
          </li>
        </div>
        <div className="col">
          <li className="list-group-item" id="mealplannershopping">
            <p className="dailymealplannerdescription">
              <strong>
                Use our Shopping List to write items that you need to shop to
                cook your daily meals!
              </strong>
            </p>
            <h1>Shopping List</h1>
            <h4>
              <i class="fas fa-calendar"></i>
              <input type="date"></input>
            </h4>
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <DailyMealPlanning mealid="Healthy-Fat">
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    handleSubmit(event, "healthyfat");
                  }}
                >
                  <input
                    className="inputmealplanner"
                    placeholder="Add an item to your list"
                    value={healthyfatInput}
                    onChange={(event) => {
                      setHealthyFatInput(event.target.value);
                    }}
                  ></input>
                </form>
                {healthyfat.map((meal) => {
                  return (
                    <ul className="m-0">
                      <li className="mealmap">{meal}</li>
                    </ul>
                  );
                })}
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Protein">
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    handleSubmit(event, "protein");
                  }}
                >
                  <input
                    className="inputmealplanner"
                    placeholder="Add an item to your list"
                    value={proteinInput}
                    onChange={(event) => {
                      setProteinInput(event.target.value);
                    }}
                  ></input>
                </form>
                {protein.map((meal) => {
                  return (
                    <ul className="m-0">
                      <li className="mealmap">{meal}</li>
                    </ul>
                  );
                })}
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Dairy">
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    handleSubmit(event, "dairy");
                  }}
                >
                  <input
                    className="inputmealplanner"
                    placeholder="Add an item to your list"
                    value={dairyInput}
                    onChange={(event) => {
                      setDairyInput(event.target.value);
                    }}
                  ></input>
                </form>
                {dairy.map((meal) => {
                  return (
                    <ul className="m-0">
                      <li className="mealmap">{meal}</li>
                    </ul>
                  );
                })}
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Grains-Carbohydrates">
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    handleSubmit(event, "grainscarbohydrates");
                  }}
                >
                  <input
                    className="inputmealplanner"
                    placeholder="Add an item to your list"
                    value={grainscarbohydratesInput}
                    onChange={(event) => {
                      setGrainscarbohydratesInput(event.target.value);
                    }}
                  ></input>
                </form>
                {grainscarbohydrates.map((meal) => {
                  return (
                    <ul className="m-0">
                      <li className="mealmap">{meal}</li>
                    </ul>
                  );
                })}
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Vegetables">
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    handleSubmit(event, "vegetables");
                  }}
                >
                  <input
                    className="inputmealplanner"
                    placeholder="Add an item to your list"
                    value={vegetablesInput}
                    onChange={(event) => {
                      setVegetablesInput(event.target.value);
                    }}
                  ></input>
                </form>
                {vegetables.map((meal) => {
                  return (
                    <ul className="m-0">
                      <li className="mealmap">{meal}</li>
                    </ul>
                  );
                })}
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Fruits">
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    handleSubmit(event, "fruits");
                  }}
                >
                  <input
                    className="inputmealplanner"
                    placeholder="Add an item to your list"
                    value={fruitsInput}
                    onChange={(event) => {
                      setFruitsInput(event.target.value);
                    }}
                  ></input>
                </form>
                {fruits.map((meal) => {
                  return (
                    <ul className="m-0">
                      <li className="mealmap">{meal}</li>
                    </ul>
                  );
                })}
              </DailyMealPlanning>
              <DailyMealPlanning mealid="All">
                {all.map((meal) => {
                  return (
                    <ul className="m-0">
                      <li className="mealmap">{meal}</li>
                    </ul>
                  );
                })}
              </DailyMealPlanning>
              <button
                className="mt-2"
                onClick={() =>
                  submitShop(
                    healthyfat,
                    protein,
                    dairy,
                    grainscarbohydrates,
                    vegetables,
                    fruits,
                    all,
                    dayShop
                  )
                }
              >
                Save
              </button>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
};
