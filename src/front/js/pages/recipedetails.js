import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/recipedetails.css";
import { Link, useParams } from "react-router-dom";
import parse from "html-react-parser";

export const RecipesDetails = () => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();
  const [data, setData] = useState();

  console.log(theid);
  useEffect(() => {
    theid &&
      fetch(
        `https://api.spoonacular.com/recipes/${theid}/information?apiKey=d907a1cd4b1a43b7bcc3af6eec726c71`
      )
        .then((response) => response.json())
        .then((responseAsJson) => {
          setData(responseAsJson);
          console.log("This is my actual data", responseAsJson);
        })
        .catch((error) => {
          console.log("Looks like there was a problem: \n", error);
        });
  }, [store.data.results]);
  console.log(data && data.diets);
  return (
    <div>
      <div className="card" id="cardrecipes">
        <img src={data && data.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data && data.title}</h5>
          <p className="card-text">{data && parse(data.summary)}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Servings: {data && data.servings}</li>
          <li className="list-group-item">
            Ready in: {data && data.readyInMinutes} minutes
          </li>
          <li className="list-group-item">Dairy Free: True</li>
          <li className="list-group-item">Gluten Free: True</li>
        </ul>
        <div className="card-body">
          <button
            type="button"
            className="btn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Instructions
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                  {data &&data.title}
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">{data && parse(data.instructions)}</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
