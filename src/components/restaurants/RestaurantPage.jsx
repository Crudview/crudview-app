import React from "react";
import { useSelector } from "react-redux";
import { makeStyles, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import ReviewsContainer from "./ReviewsContainer";
const useStyles = makeStyles({
	root: {
		margin: "60px auto 0 100px ",
		width: "90%",
		border: "5px solid gold",
		borderRadius: "30px"
	},
	secondContainer: {
		margin: "0 auto"
	},
	header: {
		textAlign: "center"
	},
	restaurantImage: {
		width: "65%",
		margin: "60px auto 0 230px ",
		borderRadius: "30px",
		height: "600px"
	},
	info: {
		fontStyle: "italic",
		textAlign: "center"
	},

	button: {
		background: "linear-gradient(0.25turn, crimson,orange, gold);",
		margin: "15px auto 10px 30%",
		width: "40%"
	}
});

// rating: 4
// price: "$$"
// address: "253 W 55th St"
// phone: "(212) 980-7909"

export const RestaurantPage = props => {
	const classes = useStyles();
	let paramsId = parseInt(props.match.params.id, 10);
	const restaurants = useSelector(state => state.restaurant.restaurants);
	let restaurant = restaurants.filter(restaurant => restaurant.id === paramsId);
	console.log(paramsId, restaurants, restaurant);

	const renderPage = () => {
		return restaurant.map(restaurant => {
			return (
				<div className={classes.secondContainer}>
					<h1 className={classes.header}>{restaurant.name}</h1>
					<img
						className={classes.restaurantImage}
						src={restaurant.image_url}
						alt={restaurant.name}
					/>
					<p className={classes.info}>Rating: {restaurant.rating}/5 </p>
					<p className={classes.info}>Price: {restaurant.price}</p>
					<p className={classes.info}>Address: {restaurant.address}</p>
					<p className={classes.info}>Phone: {restaurant.phone}</p>
					<Button className={classes.button} variant="outlined">
						<Link
							style={{
								textDecoration: "none",
								fontWeight: "bold"
							}}
							to="/restaurants/review-form"
						>
							Add Review
						</Link>
					</Button>
				</div>
			);
		});
	};
	return <div className={classes.root}>{renderPage()}</div>;
};