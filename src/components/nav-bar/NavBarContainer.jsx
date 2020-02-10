import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";

import "./NavBar.scss";

export const NavBarContainer = () => {
	return (
		<div className="nav-bar">
			<Link to="/">
				<h1 className="logo">Crudview</h1>
			</Link>
			<NavBar />
		</div>
	);
};
