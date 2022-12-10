import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import HealthyFat from "../../img/healthy-fat.png";
import Protein from "../../img/protein.png";
import Dairy from "../../img/dairy.png";
import GrainsCarbohydrates from "../../img/grains-carbohydrates.png";
import Vegetables from "../../img/vegetables.png";
import Fruits from "../../img/fruits.png";
import "../../styles/foodcategories.css";

const FoodCategoriesModal = (props) => {
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

export const FoodCategories = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="expiration2">
        <h1>
          <strong>Food Categories</strong>
        </h1>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <li className="list-group-item" id="foodcategories">
                <h2>Healthy Fat</h2>
                <img src={HealthyFat} />
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#fatmodal"
                >
                  <i className="fas fa-utensils"></i> Learn More
                </button>
                <button type="button" className="btn">
                  <i className="fas fa-plus"></i>Add item to shopping list
                </button>

                <FoodCategoriesModal modalid="fatmodal">
                  <h2>Healthy Fat</h2>
                  Healthy Fat foods are known as the “good fats”, because they
                  are good for your heart, your cholesterol, and your overall
                  health. A small amount of fat is an essential part of a
                  healthy, balanced diet. It's a source of essential fatty
                  acids, which the body cannot make itself. Fat helps the body
                  absorb vitamin A, vitamin D and vitamin E. These vitamins are
                  fat-soluble, which means they can only be absorbed with the
                  help of fats. <p>Examples of Healhy Fats are:</p>
                  <p>
                    <strong>
                      Butter, Cheese, Milk, Oil (Olive, Canola, Avocado, etc),
                      Nuts, Seeds and Chocolate.
                    </strong>
                  </p>
                </FoodCategoriesModal>
              </li>
            </div>

            <div className="col">
              <li className="list-group-item" id="foodcategories">
                <h2>Protein</h2>
                <img src={Protein} />
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#proteinmodal"
                >
                  <i className="fas fa-utensils"></i> Learn More
                </button>
                <button type="button" className="btn">
                  <i className="fas fa-plus"></i>Add item to shopping list
                </button>

                <FoodCategoriesModal modalid="proteinmodal">
                  <h2>Protein</h2>Protein is found throughout the body—in
                  muscle, bone, skin, hair, and virtually every other body part
                  or tissue. It makes up the enzymes that power many chemical
                  reactions and the hemoglobin that carries oxygen in your
                  blood. At least 10,000 different proteins make you what you
                  are and keep you that way. Protein is made from twenty-plus
                  basic building blocks called amino acids. Because we don’t
                  store amino acids, our bodies make them in two different ways:
                  either from scratch, or by modifying others. Nine amino
                  acids—histidine, isoleucine, leucine, lysine, methionine,
                  phenylalanine, threonine, tryptophan, and valine-known as the
                  essential amino acids, must come from food.{" "}
                  <p>Examples of Proteins are:</p>
                  <p>
                    <strong>
                      Meat, Beans, Eggs, Seafood, Yogurt, Lentils, Soy and
                      White-Meat Poultry.
                    </strong>
                  </p>
                </FoodCategoriesModal>
              </li>
            </div>

            <div className="col">
              <li className="list-group-item" id="foodcategories">
                <h2>Dairy</h2>
                <img src={Dairy} />
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#dairymodal"
                >
                  <i className="fas fa-utensils"></i> Learn More
                </button>
                <button type="button" className="btn">
                  <i className="fas fa-plus"></i>Add item to shopping list
                </button>

                <FoodCategoriesModal modalid="dairymodal">
                  <h2>Dairy</h2>
                  Dairy products or Milk products, also known as lacticinia, are
                  food products made from milk. Eating or drinking Dairy
                  products offers health benefits, like building and maintaining
                  strong bones. Dairy Group foods provide nutrients that are
                  vital for the health and maintenance of the body. These
                  nutrients include calcium, potassium, vitamin D, and protein.
                  <p>Examples of Dairy foods are:</p>
                  <p>
                    <strong>
                      Milk, Yogurt, Butter, Cheese, Cream (Heavy Cream, Sour
                      Cream, etc) and Ice Cream.
                    </strong>
                  </p>
                </FoodCategoriesModal>
              </li>
            </div>
          </div>
        </div>

        <div className="container text-center">
          <div className="row">
            <div className="col">
              <li className="list-group-item" id="foodcategories">
                <h2>Grains/Carbohydrates</h2>
                <img src={GrainsCarbohydrates} />
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#grainscarbohydratesmodal"
                >
                  <i className="fas fa-utensils"></i> Learn More
                </button>
                <button type="button" className="btn">
                  <i className="fas fa-plus"></i>Add item to shopping list
                </button>

                <FoodCategoriesModal modalid="grainscarbohydratesmodal">
                  <h2>Grains/Carbohydrates</h2>Carbohydrates are your body's
                  main source of energy: They help fuel your brain, kidneys,
                  heart muscles, and central nervous system. For instance, fiber
                  is a carbohydrate that aids in digestion, helps you feel full,
                  and keeps blood cholesterol levels in check.
                  <p>Examples of Grains/Carbohydrates are:</p>
                  <p>
                    <strong>
                      Bread, Noodles, Pasta, Crackers, Cereals and Rice.
                    </strong>
                  </p>
                </FoodCategoriesModal>
              </li>
              <div></div>
            </div>

            <div className="col">
              <li className="list-group-item" id="foodcategories">
                <h2>Vegetables</h2>
                <img src={Vegetables} />
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#vegetablesmodal"
                >
                  <i class="fas fa-utensils"></i> Learn More
                </button>
                <button type="button" className="btn">
                  <i className="fas fa-plus"></i>Add item to shopping list
                </button>

                <FoodCategoriesModal modalid="vegetablesmodal">
                  <h2>Vegetables</h2>Vegetables are very rich in nutrients. They
                  can regulate our metabolism, protect skin, help our bones,
                  bloodstream, heart, guts, reduce risk of cancer, preserve our
                  eyesight and much more.
                  <p>Examples of Vegetables are:</p>
                  <p>
                    <strong>
                      Spinach, Carrot, Broccoli, Cauliflower, Asparagus, Green
                      Beans, Kale, Lettuce, Cucumber, Onion, Spinach and
                      Peppers.
                    </strong>
                  </p>
                </FoodCategoriesModal>
              </li>
              <div></div>
            </div>

            <div className="col">
              <li className="list-group-item" id="foodcategories">
                <h2>Fruits</h2>
                <img src={Fruits} />
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#fruitsmodal"
                >
                  <i className="fas fa-utensils"></i> Learn More
                </button>
                <button type="button" className="btn">
                  <i className="fas fa-plus"></i>Add item to shopping list
                </button>

                <FoodCategoriesModal modalid="fruitsmodal">
                  <h2>Fruits</h2>The consumption of fruit is not only essential
                  for the health and maintenance of body but they actually make
                  your skin look radiant, young and glowing as fruits are full
                  of anti-oxidants.
                  <p>Examples of fruit are</p>
                  <p>
                    <strong>
                      Strawberries, Watermelon, Pineapples, Berries, Oranges,
                      Grapes, Apples, Kiwi, etc.
                    </strong>
                  </p>
                </FoodCategoriesModal>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
