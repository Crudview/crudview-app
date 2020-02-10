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
		setUserInput({
			username: "",
			password: ""
		});
		props.history.push("/");
	};
	return (
		<div className="form-container">
			<h1
				style={{
					textAlign: "center",
					color: " #AE0127"
				}}
			>
				Signup
			</h1>
			<form className="user-forms" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Username"
					name="username"
					value={userInput.username}
					onChange={handleChange}
				/>
				<input
					type="password"
					placeholder="Password"
					name="password"
					value={userInput.password}
					onChange={handleChange}
				/>
				<Button variant="outlined" type="submit">
					Signup
				</Button>
			</form>
		</div>
	);
};
