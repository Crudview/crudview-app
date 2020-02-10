import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import "./NavBar.scss";

export const NavBar = () => {
	const isLoggedIn = useSelector(state => state.login.isLoggedIn);
	return (
		<div>
			<ul>
				<Button variant="outlined">
					<Link to="/login">
						<li>Login</li>
					</Link>
				</Button>

				<Button variant="outlined">
					<Link to="/signup">
						<li>Signup</li>
					</Link>
				</Button>
			</ul>
		</div>
	);
};
