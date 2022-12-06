import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Navbar } from "./component/navbar";
import { Home } from "./pages/home";
import { FoodCategories } from "./pages/foodcategories";
import { MealPlannerShopping } from "./pages/mealplannershopping";
import { PantryScan } from "./pages/pantryscan";
import { Recipes } from "./pages/recipes";
import { ContactUs } from "./pages/contactus";
import { Login } from "./component/login";
import { CreateAccount } from "./pages/createaccount";
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
              <Route element={<Demo />} path="/demo" />
              <Route element={<Single />} path="/single/:theid" />
              <Route element={<Home />} path="/" />
              <Route element={<FoodCategories />} path="/foodcategories" />
              <Route element={<MealPlannerShopping />} path="/mealplannershopping" />
              <Route element={<PantryScan />} path="/pantryscan" />
              <Route element={<Recipes />} path="/recipes" />
              <Route element={<ContactUs />} path="/contactus" />
              <Route element={<Login />} path="/login" />
              <Route element={<CreateAccount />} path="/createaccount" />
              <Route element={<h1>Not found!</h1>} />
            </Routes>
          </div>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
