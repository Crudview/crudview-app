import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { NavBarContainer } from "./components/nav-bar/NavBarContainer";
import { HomePage } from "./components/HomePage";
import Routes from "./Routes";
import userActions from "./actions/loginAction";
import "./App.scss";

function App() {
	const dispatch = useDispatch();
	const currentUser = useSelector(state => state.login.currentUser);
	useEffect(() => {
		dispatch(userActions.persistUser(currentUser));
	}, [currentUser, dispatch]);
	return (
		<div className="App">
			<NavBarContainer />
			{/* <HomePage /> */}
			<Routes />
		</div>
	);
}

export default App;
