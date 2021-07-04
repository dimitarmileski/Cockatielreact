import React from "react";
//import {Switch, Route} from 'react-router-dom'
import LoginButton from "../Authentication/LoginButton";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import ListAllCocktails from "../ViewCocktails/ListAllCocktails";
import CustomCoctails from "../CustomCocktail/CustomCocktail";
import UserProfile from "../Authentication/UserProfile";
import ShoppingCard from "../ShoppingCard/ShoppingCard";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import StripePayment from "../Payment/StripePayment";
const PageRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route path="/ListAllCocktails">
        <ListAllCocktails />
      </Route>

      <Route path="/CustomCoctails">
        <CustomCoctails />
      </Route>

      <Route path="/AboutUs">
        <AboutUs />
      </Route>

      <Route path="/UserProfile">
        <UserProfile />
      </Route>

      <Route path="/Cart">
        <ShoppingCard />
      </Route>
    </Switch>
  );
};

export default PageRouter;
