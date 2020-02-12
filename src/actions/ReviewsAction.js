// BASE URLS
const BASE_URL = "http://localhost:3001/reviews";
const PATCH_URL = id => `${BASE_URL}/${id}`;

// action creators
const setReviews = reviewObj => ({
	type: "ADD_REVIEW",
	payload: reviewObj
});

// bind action creators

const getReviews = () => dispatch => {
	let config = {
		method: "GET",
		headers: {
			Authorization: `Bearer ${localStorage.token}`
		}
	};
	fetch(BASE_URL, config)
		.then(res => res.json())
		.then(data => dispatch(setReviews(data)));
};

const postReviews = (reviewObj, currentUser, currentRestaurant) => dispatch => {
	let config = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			Authorization: `Bearer ${localStorage.token}`
		},
		body: JSON.stringify({
			comment: reviewObj.comment,
			user_id: currentUser.id,
			restaurant_id: currentRestaurant.id
		})
	};
	fetch(BASE_URL, config)
		.then(res => res.json())
		.then(data => dispatch(setReviews(data)));
};

export default {
	getReviews,
	postReviews
};
