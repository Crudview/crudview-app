import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, Button } from "@material-ui/core";

import restaurantActions from "../../actions/restaurantActions";
import ReviewsContainer from "./ReviewsContainer";
import reviewActions from "../../actions/ReviewsAction";
import ReviewsAction from "../../actions/ReviewsAction";

const useStyles = makeStyles({
	root: {
		marginLeft: "auto",
		marginRight: "auto",
		marginTop: "60px",
		width: "60%",
		border: "5px solid gold",
		borderRadius: "30px",
	},
	secondContainer: {
		margin: "0 auto",
	},
	header: {
		textAlign: "center",
	},
	restaurantImage: {
		display: "block",
		width: "65%",
		margin: "60px auto auto auto ",
		borderRadius: "30px",
		height: "600px",
	},
	info: {
		fontStyle: "italic",
		textAlign: "center",
	},

	button: {
		background: "linear-gradient(0.25turn, crimson,orange, gold);",
		margin: "15px auto 10px 30%",
		width: "40%",
	},
});

export const RestaurantPage = (props) => {
	const dispatch = useDispatch();
	dispatch(ReviewsAction.getRestaurantReviews(localStorage.currentRestaurant));
	// useEffect(() => {
	// 	// dispatch(reviewActions.getReviews());
	// }, [dispatch]);
	const classes = useStyles();
	let paramsId = parseInt(props.match.params.id, 10);
	const restaurants = useSelector((state) => state.restaurant.restaurants);
	let restaurant = restaurants.filter(
		(restaurant) => restaurant.id === paramsId
	);
	const getCurrentRestaurant = (restaurantObj) => {
		dispatch(restaurantActions.getCurrentRestaurant(restaurantObj));
		props.history.push("/restaurants/review-form");
	};

	const renderPage = () => {
		return restaurant.map((restaurant) => {
			if (restaurant.price === null) restaurant.price = "$$";
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
					<Button
						onClick={() => getCurrentRestaurant(restaurant)}
						className={classes.button}
						variant="outlined"
					>
						Add Review
					</Button>
					<h2
						style={{
							marginTop: "60px",
							marginBottom: "20px",
							textAlign: "center",
						}}
					>
						Reviews Section
					</h2>
				</div>
			);
		});
	};
	return (
		<div className={classes.root}>
			{renderPage()}
			<ReviewsContainer history={props.history} />
		</div>
	);
};
