import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { DailyMealPlanning } from "./codecleaner.js";
import "../../styles/recipes.css";
import { Carousel, CarouselSlide } from "../pages/carousel";
import "../../styles/carousel.css";

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
  const [recipes, setRecipes] = useState();
  const [diet, setDiet] = useState("*");
  useEffect(() => {
    actions.getRecipeData()
  }, []);

  console.log("hello", store);

  const [index, setIndex] = useState(1);
  const handleSelect = (selectIndex, i) => {
    setIndex(selectIndex);
  };
  // function getRecipes() {
  //   fetch(
  //     `https://api.spoonacular.com/recipes/complexSearch/diet=${diet}?apiKey=0ed22b6105b2418e80a5af8d0f8a2353`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setRecipes(data);
  //       console.log(data);
  //       console.log(diet);
  //     })
  //     .catch(() => {
  //       console.log("error");
  //     });
  // }

  return (
    <div className="mt-5">
      <div className="row">
        <div className="col">
          <li className="list-group-item" id="recipes">
            <h1>Recipes</h1>
            <p></p>
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <DailyMealPlanning mealid="Keto">
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#ketomodal"
                >
                  <i className="fas fa-utensils"></i> Learn More
                </button>
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner w-50 h-40 m-auto">
                    <div
                      className="carousel-item active"
                      onSelect={handleSelect}
                    >
                      <Carousel carouselId="someCarousel">
                        {store.complex&&store.complex.map((elem, idx) => {
                          return (
                            <CarouselSlide
                              id={elem.id}
                              name={elem.title}
                              src={elem.image}
                              alt={elem.title}
                              isFirst={idx === 0}
                              key={idx}
                              style={{ width: "200px" }}
                            />
                          );
                        })}
                      </Carousel>
                    </div>        
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>

                <RecipesModal modalid="ketomodal">
                  <h2>Keto</h2>The ketogenic diet is a high-fat,
                  adequate-protein, low-carbohydrate dietary therapy. The diet
                  forces the body to burn fats rather than carbohydrates.
                </RecipesModal>
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Vegetarian">
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#vegetarianmodal"
                >
                  <i className="fas fa-utensils"></i> Learn More
                </button>
                <RecipesModal modalid="vegetarianmodal">
                  <h2>Vegetarian</h2>
                  Vegetarian cuisine is based on food that meets vegetarian
                  standards by not including meat and animal tissue products
                  (such as gelatin or animal-derived rennet).
                </RecipesModal>
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Pescatarian">
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#pescatarianmodal"
                >
                  <i className="fas fa-utensils"></i> Learn More
                </button>
                <RecipesModal modalid="pescatarianmodal">
                  <h2>Pescatarian</h2>
                  Pescatarians have a lot in common with vegetarians. They eat
                  fruits, veggies, nuts, seeds, whole grains, beans, eggs, and
                  dairy, and stay away from meat and poultry. But there's one
                  way they part company from vegetarians: Pescatarians eat fish
                  and other seafood.
                </RecipesModal>
              </DailyMealPlanning>
              <DailyMealPlanning mealid="Vegan">
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#veganmodal"
                >
                  <i className="fas fa-utensils"></i> Learn More
                </button>
                <RecipesModal modalid="veganmodal">
                  <h2>Vegan</h2>A vegan diet is based on plants (such as
                  vegetables, grains, nuts and fruits) and foods made from
                  plants. Vegans do not eat foods that come from animals,
                  including dairy products and eggs.
                </RecipesModal>
              </DailyMealPlanning>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
};
