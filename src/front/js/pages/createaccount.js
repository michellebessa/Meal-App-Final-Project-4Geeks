import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../styles/createaccount.css";

export const CreateAccount = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <h1>TEST</h1>
    </div>
  );
};
