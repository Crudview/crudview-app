import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { NavBarContainer } from "./components/nav-bar/NavBarContainer";
// import { HomePage } from "./components/HomePage";
import Routes from "./Routes";
import userActions from "./actions/loginAction";
import restaurantActions from "./actions/restaurantActions";
import "./App.scss";

const App = () => {
	const dispatch = useDispatch();
	const currentUser = useSelector(state => state.login.currentUser);
	const loggedIn = useSelector(state => state.login.isLoggedIn);
	useEffect(() => {
		if (localStorage.token) {
			dispatch(userActions.persistUser(currentUser));
			dispatch(restaurantActions.fetchRestaurants());
		}
	}, [currentUser, dispatch, loggedIn]);

	return (
		<div className="App">
			<NavBarContainer />
			{/* <HomePage /> */}
			<Routes />
		</div>
	);
};

export default App;
