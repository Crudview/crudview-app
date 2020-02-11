import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

import userActions from "../../actions/loginAction";

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
		dispatch(userActions.loginUserToDB(loginInput));

		setLoginInput({
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
				Login
			</h1>
			<form className="user-forms" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Username"
					name="username"
					value={loginInput.username}
					onChange={handleChange}
				/>
				<input
					type="password"
					placeholder="Password"
					name="password"
					value={loginInput.password}
					onChange={handleChange}
				/>
				<Button variant="outlined" type="submit">
					Login
				</Button>
			</form>
		</div>
	);
};
