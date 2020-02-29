// BASE URLS
const BASE_URL = "http://localhost:3001/restaurants";
const SPECIFIC_BASE_URL = id => `http://localhost:3001/restaurants/${id}`;

// action creators
const getRestaurantsFromDB = restaurants => ({
	type: "GET_RESTAURANTS",
	payload: restaurants
});

const currentRestaurant = restaurantObj => ({
	type: "GET_CURRENT_RESTAURANT",
	payload: restaurantObj
});
//  bind action creators

const fetchRestaurants = () => dispatch => {
	let config = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			Authorization: `Bearer ${localStorage.token}`
		}
	};

	fetch(BASE_URL, config)
		.then(res => res.json())
		.then(data => {
			dispatch(getRestaurantsFromDB(data));
		});
};

const getCurrentRestaurant = restaurantObj => dispatch => {
	dispatch(currentRestaurant(restaurantObj));
	localStorage.setItem("currentRestaurant", JSON.stringify(restaurantObj));
};

const persistCurrentRestaurant = () => dispatch => {
	const config = {
		method: "GET",
		headers: {
			Authorization: `Bearer ${localStorage.token}`
		}
	};
	let restaurant = JSON.parse(localStorage.currentRestaurant);

	fetch(`http://localhost:3001/restaurants/${restaurant.id}`)
		.then(res => res.json())
		.then(restaurantObj => {
			dispatch(currentRestaurant(restaurantObj));
		});
};

export default {
	fetchRestaurants,
	getCurrentRestaurant,
	persistCurrentRestaurant
};
