// BASE URLS
const BASE_URL = "http://localhost:3001/restaurants";
const SPECIFIC_BASE_URL = id => `http://localhost:3001/restaurants/${id}`;

// action creators
const getRestaurantsFromDB = restaurants => ({
	type: "GET_RESTAURANTS",
	payload: restaurants
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

export default {
	fetchRestaurants
};
