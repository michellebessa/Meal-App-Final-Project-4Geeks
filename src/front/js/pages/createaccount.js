import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../styles/createaccount.css";

export const CreateAccount = () => {
  const { store, actions } = useContext(Context);

  return (
    <form className="forminput m-auto">
      <div className="">
        <h1>Create an account</h1>
        <label for="exampleInputEmail1" className="form-label">
        Email address
        </label>
        <p>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <p className="emailtext">We'll never share your email with anyone else.</p>
        </p>
      </div>
      <div className="">
        <label for="exampleInputPassword1" className="form-label">
          Create a password
        </label>
        <p>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </p>
      </div>

      <div className="">
        <label for="exampleInputPassword1" className="form-label">
          Confirm your password
        </label>
        <p>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </p>
      </div>
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
};
