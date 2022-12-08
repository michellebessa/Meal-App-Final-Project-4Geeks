import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { WeekDay, DailyMealPlanning } from "./codecleaner.js";
import { FoodCategoriesModal } from "./foodcategories.js";

const RecipesButtonModal = () => {
  <button
    type="button"
    className="btn"
    data-bs-toggle="modal"
    data-bs-target="#"
  >
    <i className="fas fa-utensils"></i> Learn More
  </button>;
};

export const Recipes = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mt-5">
      <div className="row">
        <div className="col">
          <li className="list-group-item" id="recipes">
            <h1>Recipes</h1>
            <p></p>
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <DailyMealPlanning mealid="Maintenance">
                <row>
                  <button
                    type="button"
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#"
                  >
                    <i className="fas fa-utensils"></i> Learn More
                  </button>
                  <button type="button" className="btn">
                    <i className="fas fa-plus" id="recipesicon"></i>Add recipe
                    to list
                  </button>
                  <button type="button" className="btn">
                    <i className="fas fa-plus" id="recipesicon"></i>Types of
                    Cuisine
                  </button>
                </row>
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Bulk/Surplus">
                <row>
                  <button
                    type="button"
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#"
                  >
                    <i className="fas fa-utensils"></i> Learn More
                  </button>
                  <button type="button" className="btn">
                    <i className="fas fa-plus" id="recipesicon"></i>Add recipe
                    to list
                  </button>
                  <button type="button" className="btn">
                    <i className="fas fa-plus" id="recipesicon"></i>Types of
                    Cuisine
                  </button>
                </row>
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Keto">
                <row>
                  <button
                    type="button"
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#"
                  >
                    <i className="fas fa-utensils"></i> Learn More
                  </button>
                  <button type="button" className="btn">
                    <i className="fas fa-plus" id="recipesicon"></i>Add recipe
                    to list
                  </button>
                  <button type="button" className="btn">
                    <i className="fas fa-plus" id="recipesicon"></i>Types of
                    Cuisine
                  </button>
                </row>
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Vegetarian">
                <row>
                  <button
                    type="button"
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#"
                  >
                    <i className="fas fa-utensils"></i> Learn More
                  </button>
                  <button type="button" className="btn">
                    <i className="fas fa-plus" id="recipesicon"></i>Add recipe
                    to list
                  </button>
                  <button type="button" className="btn">
                    <i className="fas fa-plus" id="recipesicon"></i>Types of
                    Cuisine
                  </button>
                </row>
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Pescatarian">
                <row>
                  <button
                    type="button"
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#"
                  >
                    <i className="fas fa-utensils"></i> Learn More
                  </button>
                  <button type="button" className="btn">
                    <i className="fas fa-plus" id="recipesicon"></i>Add recipe
                    to list
                  </button>
                  <button type="button" className="btn">
                    <i className="fas fa-plus" id="recipesicon"></i>Types of
                    Cuisine
                  </button>
                </row>
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Vegan">
                <row>
                  <button
                    type="button"
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#"
                  >
                    <i className="fas fa-utensils"></i> Learn More
                  </button>
                  <button type="button" className="btn">
                    <i className="fas fa-plus" id="recipesicon"></i>Add recipe
                    to list
                  </button>
                  <button type="button" className="btn">
                    <i className="fas fa-plus" id="recipesicon"></i>Types of
                    Cuisine
                  </button>
                </row>
              </DailyMealPlanning>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
};
