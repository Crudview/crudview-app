import React from "react";
import { useSelector } from "react-redux";
import { RestaurantCard } from "./RestaurantCard";
import { makeStyles } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { RestaurantPage } from "./RestaurantPage";
const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap"
	}
});
export const RestaurantContainer = () => {
	const classes = useStyles();
	const restaurants = useSelector(state => state.restaurant.restaurants);
	return (
		<div className={classes.root}>
			{restaurants.map(restaurant => (
				<RestaurantCard key={restaurant.id} restaurant={restaurant} />
			))}
		</div>
	);
};
