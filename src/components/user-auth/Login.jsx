import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

import UserActions from "../../actions/loginAction";

import "./UserAuth.scss";

export const Login = props => {
	const dispatch = useDispatch();
	const [loginInput, setLoginInput] = useState({
		username: "",
		password: ""
	});
	const handleChange = e => {
		setLoginInput({
			...loginInput,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(UserActions.loginUserToDB(loginInput));
		props.history.push("/");
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Username"
					name="username"
					value={loginInput.username}
					handleChange={handleChange}
				/>
				<input
					type="text"
					placeholder="Password"
					name="password"
					value={loginInput.password}
					handleChange={handleChange}
				/>
				<Button variant="outlined" type="submit">
					Login
				</Button>
			</form>
		</div>
	);
};
