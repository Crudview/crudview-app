import React from "react";
import { makeStyles, Grid, Button } from "@material-ui/core";

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
	console.log("props: ", props);

	const handleClick = () => {
		props.history.push(`/restaurants/${props.restaurant.id}`);
	};
	return (
		<div>
			<Grid container className={classes.root} spacing={1}>
				<h3 className={classes.header}>{props.restaurant.name}</h3>
				<img
					className={classes.cardImage}
					src={props.restaurant.image_url}
					alt={props.restaurant.name}
				/>
				<Button
					onClick={handleClick}
					className={classes.button}
					variant="outlined"
				>
					Restaurant Page
				</Button>
			</Grid>
		</div>
	);
};
