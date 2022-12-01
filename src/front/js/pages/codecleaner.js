//Here is where I will be storing the components
//that we are using in the project

import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from "prop-types";

const DailyMealPlanning = (props) => {
  const [id, setId] = useState("")
  useEffect(()=>{
    setId(props.mealid.replace(/\W/g,""))
  },[])
    return (
      <div className="accordion-item">
        <h2
          className="accordion-header"
          id={"panelsStayOpen-heading" + id}
        >
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#panelsStayOpen-collapse${id}`}
            aria-expanded="false"
            aria-controls={`panelsStayOpen-collapse${id}`}
          >
            {props.mealid}
          </button>
        </h2>
        <div
          id={`panelsStayOpen-collapse${id}`}
          className="accordion-collapse collapse"
          aria-labelledby={id}
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

