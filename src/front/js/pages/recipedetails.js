import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const RecipesDetails = () => {
  const { store, actions } = useContext(Context);
  console.log(store)

  return <div>hello</div>;
};
