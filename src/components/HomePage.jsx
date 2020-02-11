import React from "react";
import { makeStyles, Button } from "@material-ui/core";

import "./HomePage.scss";

const useStyles = makeStyles({
	button: {
		background: "linear-gradient(0.25turn, crimson,orange, gold)",
		margin: "20px auto 10px 22.5%",
		width: "60%",
		borderRadius: "10px"
	}
});
export const HomePage = props => {
	const classes = useStyles();

	const handleClick = () => {
		props.history.push("/restaurants");
	};
	return (
		<div className="home-page">
			<h1
				style={{
					textAlign: "center",
					marginLeft: "80px",
					color: "crimson"
				}}
			>
				Welcome To Crudview
			</h1>
			<img
				className="main-img"
				src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
				alt="home_page_cover"
			/>
			<Button
				onClick={handleClick}
				className={classes.button}
				variant="outlined"
			>
				List of Restaurants
			</Button>
		</div>
	);
};
