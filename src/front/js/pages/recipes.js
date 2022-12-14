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
                    roughly equivalent to the calories you spend, meaning you
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
                    data-bs-target="#bulksurplusmodal"
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
                  <RecipesModal modalid="bulksurplusmodal">
                    <h2>Bulk/Surplus</h2>A calorie surplus/bulk is consuming an
                    added amount of daily calories when adding resistance
                    training to boost muscle and strength gains.
                  </RecipesModal>
                </row>
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Keto">
                <row>
                  <button
                    type="button"
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#ketomodal"
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
                  <RecipesModal modalid="ketomodal">
                    <h2>Keto</h2>The ketogenic diet is a high-fat,
                    adequate-protein, low-carbohydrate dietary therapy. The diet
                    forces the body to burn fats rather than carbohydrates.
                  </RecipesModal>
                </row>
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Vegetarian">
                <row>
                  <button
                    type="button"
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#vegetarianmodal"
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
                  <RecipesModal modalid="vegetarianmodal">
                    <h2>Vegetarian</h2>
                    Vegetarian cuisine is based on food that meets vegetarian
                    standards by not including meat and animal tissue products
                    (such as gelatin or animal-derived rennet).
                  </RecipesModal>
                </row>
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Pescatarian">
                <row>
                  <button
                    type="button"
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#pescatarianmodal"
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
                  <RecipesModal modalid="pescatarianmodal">
                    <h2>Pescatarian</h2>
                    Pescatarians have a lot in common with vegetarians. They eat
                    fruits, veggies, nuts, seeds, whole grains, beans, eggs, and
                    dairy, and stay away from meat and poultry. But there's one
                    way they part company from vegetarians: Pescatarians eat
                    fish and other seafood.
                  </RecipesModal>
                </row>
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Vegan">
                <row>
                  <button
                    type="button"
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#veganmodal"
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
                  <RecipesModal modalid="veganmodal">
                    <h2>Vegan</h2>A vegan diet is based on plants (such as
                    vegetables, grains, nuts and fruits) and foods made from
                    plants. Vegans do not eat foods that come from animals,
                    including dairy products and eggs.
                  </RecipesModal>
                </row>
              </DailyMealPlanning>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
};
