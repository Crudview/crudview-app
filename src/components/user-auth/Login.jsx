import React from "react";

import { Button } from "@material-ui/core";

import "./UserAuth.scss";

export const Login = () => {
	return (
		<div>
			<form onSubmit={null}>
				<input
					type="text"
					placeholder="Username"
					value={null}
					handleChange={null}
				/>
				<input
					type="text"
					placeholder="Password"
					value={null}
					handleChange={null}
				/>
				<Button variant="outlined" type="submit">
					Login
				</Button>
			</form>
		</div>
	);
};
