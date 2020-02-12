import React from "react";
import { Route, Switch } from "react-router-dom";

import { HomePage } from "./components/HomePage";
import { Login } from "./components/user-auth/Login";
import { SignUp } from "./components/user-auth/SignUp";
import { RestaurantContainer } from "./components/restaurants/RestaurantContainer";
import { RestaurantPage } from "./components/restaurants/RestaurantPage";
import ReviewsForm from "./components/restaurants/ReviewsForm";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/signup" component={SignUp} />
			<Route exact path="/restaurants" component={RestaurantContainer} />
			<Route exact path="/restaurants/review-form" component={ReviewsForm} />
			<Route exact path="/restaurants/:id" component={RestaurantPage} />
		</Switch>
	);
};

export default Routes;
