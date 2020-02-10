import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import userActions from "../../actions/loginAction";
import "./NavBar.scss";

export const NavBar = () => {
	const currentUser = useSelector(state => state.login.currentUser);
	const dispatch = useDispatch();
	const handleLogOut = () => {
		dispatch(userActions.logoutUser());
	};
	return (
		<div>
			{currentUser.username ? (
				<ul>
					<Button onClick={handleLogOut} variant="outlined">
						<Link to="/login">
							<li>Logout</li>
						</Link>
					</Button>
				</ul>
			) : (
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
			)}
		</div>
	);
};
