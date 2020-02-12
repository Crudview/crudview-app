import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NavBarContainer } from "./components/nav-bar/NavBarContainer";
import Routes from "./Routes";
import userActions from "./actions/loginAction";
import reviewActions from "./actions/ReviewsAction";
import restaurantActions from "./actions/restaurantActions";

import "./App.scss";

const App = () => {
	const dispatch = useDispatch();
	const currentRestaurant = useSelector(
		state => state.restaurant.currentRestaurant
	);
	useEffect(() => {
		if (localStorage.token) {
			dispatch(userActions.persistUser());
			dispatch(restaurantActions.fetchRestaurants());
			dispatch(reviewActions.getReviews(currentRestaurant));
		}
	}, [currentRestaurant, dispatch]);

	return (
		<div className="App">
			<NavBarContainer />
			<Routes />
		</div>
	);
};

export default App;
