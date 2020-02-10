import React from "react";
import { Route } from "react-router-dom";

import { NavBarContainer } from "./components/nav-bar/NavBarContainer";
import { HomePage } from "./components/HomePage";

import "./App.scss";

function App() {
	return (
		<div className="App">
			<NavBarContainer />
			<HomePage />
			<Route />
		</div>
	);
}

export default App;
