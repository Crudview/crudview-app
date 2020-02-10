import React from "react";
import { Route, Switch } from "react-router-dom";

import { HomePage } from "./components/HomePage";
import { Login } from "./components/user-auth/Login";
import { SignUp } from "./components/user-auth/SignUp";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/signup" component={SignUp} />
		</Switch>
	);
};

export default Routes;
