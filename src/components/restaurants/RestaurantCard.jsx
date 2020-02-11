import React from "react";
import { RestaurantPage } from "./RestaurantPage";
import { makeStyles, Grid, Button } from "@material-ui/core";
import { Link, Route } from "react-router-dom";

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "column",
		margin: "100px auto 0 80px",
		width: "400px",
		border: "5px groove gold",
		padding: "20px"
	},
	header: {
		margin: "0 auto",
		color: "crimson"
	},
	cardImage: {
		margin: "10px auto 10px auto",
		width: "350px",
		height: "300px",
		borderRadius: "20px"
	},
	button: {
		background: "linear-gradient(0.25turn, crimson,orange, gold);"
	}
});
export const RestaurantCard = props => {
	const classes = useStyles();

	return (
		<div>
			<Grid container className={classes.root} spacing={1}>
				<h3 className={classes.header}>{props.restaurant.name}</h3>
				<img
					className={classes.cardImage}
					src={props.restaurant.image_url}
					alt={props.restaurant.name}
				/>
				<Button className={classes.button} variant="outlined">
					<Link
						style={{
							textDecoration: "none",
							fontWeight: "bold"
						}}
						to={`/restaurants/${props.restaurant.id}`}
					>
						Restaurant Page
					</Link>
				</Button>
			</Grid>
		</div>
	);
};
