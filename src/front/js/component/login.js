import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../styles/login.css";

export const Login = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <form className="loginpage">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
          <button type="submit" className="btnlogin btn">
            I forgot my password
          </button>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Remember login
          </label>
        </div>
        <button type="submit" className="btnlogin btn">
          Submit
        </button>

        <Link to="/createaccount">
          <button type="submit" className="btnlogin btn">
            Create an account
          </button>
        </Link>
      </form>
    </div>
  );
};
