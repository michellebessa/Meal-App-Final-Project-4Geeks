//Here is where I will be storing the components
//that we are using in the project

import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from "prop-types";

const DailyMealPlanning = (props) => {
    return (
      <div className="accordion-item">
        <h2
          className="accordion-header"
          id={"panelsStayOpen-heading" + props.mealid}
        >
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#panelsStayOpen-collapse${props.mealid}`}
            aria-expanded="false"
            aria-controls={`panelsStayOpen-collapse${props.mealid}`}
          >
            {props.mealid}
          </button>
        </h2>
        <div
          id={`panelsStayOpen-collapse${props.mealid}`}
          className="accordion-collapse collapse"
          aria-labelledby={props.mealid}
        >
          <div className="accordion-body">{props.children}</div>
        </div>
      </div>
    );
  };
  
  //we will have to add a prop for href later
const WeekDay = (props) => {
    return (
      <li>
        <a className="dropdown-item" href="#">
          {props.day}
        </a>
      </li>
    );
  };

export {WeekDay, DailyMealPlanning}

