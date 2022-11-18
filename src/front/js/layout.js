import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { FoodExpiring } from "./pages/foodexpiring";
import { MealPlanning } from "./pages/mealplanning";
import { PantryScan } from "./pages/pantryscan";
import { Recipes } from "./pages/recipes";
import { AboutUs } from "./pages/aboutus";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div className="h-100">
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <div className="verticalSpan">
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<Demo />} path="/demo" />
              <Route element={<Single />} path="/single/:theid" />
              <Route element={<h1>Not found!</h1>} />
              <Route element={<FoodExpiring />} path="/foodexpiring" />
              <Route element={<MealPlanning />} path="/mealplanning" />
              <Route element={<PantryScan />} path="/pantryscan" />
              <Route element={<Recipes />} path="/recipes" />
              <Route element={<AboutUs />} path="/aboutus" />
              
            </Routes>
          </div>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
