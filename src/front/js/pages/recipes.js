import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { WeekDay, DailyMealPlanning } from "./codecleaner.js";
import "../../styles/recipes.css";

const RecipesModal = (props) => {
  return (
    <div className="modal fade" id={props.modalid}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            {props.children}
            <div>
              <button type="button" className="btn" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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
                    data-bs-target="#maintenancemodal"
                  >
                    <i className="fas fa-utensils"></i> Learn More
                  </button>
                  <button type="button" className="btn">
                    <i className="fas fa-plus" id="recipesicon"></i>Add recipe
                    to list
                  </button>
                  <button type="button" className="btn">
                    <i className="fas fa-pen-alt" id="recipesicon"></i>Types of
                    Cuisine
                  </button>
                  <RecipesModal modalid="maintenancemodal">
                    <h2>Maintenance</h2>
                    Eating at maintenance means that the calories you eat are
                    roughly equivalent to the calories you expend, meaning you
                    are eating enough to neither gain or lose weight.
                    Bulk/Surplus:
                  </RecipesModal>
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
                    <i className="fas fa-pen-alt" id="recipesicon"></i>Types of
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
                    <i className="fas fa-pen-alt" id="recipesicon"></i>Types of
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
                    <i className="fas fa-pen-alt" id="recipesicon"></i>Types of
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
                    <i className="fas fa-pen-alt" id="recipesicon"></i>Types of
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
                    <i className="fas fa-pen-alt" id="recipesicon"></i>Types of
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
