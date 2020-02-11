import React from "react";
import { useSelector } from "react-redux";

export const RestaurantPage = props => {
	let paramsId = parseInt(props.match.params.id, 10);
	const restaurants = useSelector(state => state.restaurant.restaurants);
	let restaurant = restaurants.filter(restaurant => restaurant.id === paramsId);
	console.log(paramsId, restaurants, restaurant);

	const renderPage = () => {
		return restaurant.map(restaurant => {
			return (
				<div>
					<h1>{restaurant.name}</h1>
					<img src={restaurant.image_url} alt={restaurant.name} />
				</div>
			);
		});
	};
	return <div>{renderPage()}</div>;
};
