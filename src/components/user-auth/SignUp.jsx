import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";

import userActions from "../../actions/loginAction";

import "./UserAuth.scss";

export const SignUp = props => {
	const dispatch = useDispatch();
	const [userInput, setUserInput] = useState({
		username: "",
		password: ""
	});

	const handleChange = e => {
		setUserInput({
			...userInput,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(userActions.newUserToDB(userInput));
		props.history.push("/");
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Username"
					name="username"
					value={userInput.username}
					handleChange={handleChange}
				/>
				<input
					type="text"
					placeholder="Password"
					name="password"
					value={userInput.password}
					handleChange={handleChange}
				/>
				<Button variant="outlined" type="submit">
					Signup
				</Button>
			</form>
		</div>
	);
};
