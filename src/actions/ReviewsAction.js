// BASE URLS
const BASE_URL = "http://localhost:3001/reviews";

// action creators
const setReviews = (reviewObj) => ({
	type: "GET_REVIEWS",
	payload: reviewObj,
});

const setCurrentReview = (reviewObj) => ({
	type: "ADD_REVIEW",
	payload: reviewObj,
});

// const setEditReviews = (reviewObj) => ({
// 	type: "EDIT_REVIEW",
// 	payload: reviewObj,
// });

const setRestaurantCurrentReviews = (reviewObj) => ({
	type: "SET_RESTAURANT_REVIEWS",
	payload: reviewObj,
});

// bind action creators

const getReviews = () => (dispatch) => {
	let config = {
		method: "GET",
		headers: {
			Authorization: `Bearer ${localStorage.token}`,
		},
	};
	fetch(`${BASE_URL}`, config)
		.then((res) => res.json())
		.then((data) => {
			dispatch(setReviews(data));
			localStorage.setItem("currentReview", JSON.stringify(data));
		});
};

const postReviews = (reviewObj, currentUser, currentRestaurant) => (
	dispatch
) => {
	let config = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			Authorization: `Bearer ${localStorage.token}`,
		},
		body: JSON.stringify({
			comment: reviewObj.comment,
			user_id: currentUser.id,
			restaurant_id: currentRestaurant.id,
		}),
	};
	fetch(BASE_URL, config)
		.then((res) => res.json())
		.then((data) => {
			dispatch(setCurrentReview(data));
		});
};

const currentReview = (review) => (dispatch) => {
	let config = {
		headers: {
			Authorization: `Bearer ${localStorage.token}`,
		},
	};
	fetch(`${BASE_URL}/${review.id}`, config)
		.then((res) => res.json())
		.then((data) => {
			dispatch(setCurrentReview(data));
		});
};

const deleteReview = (review) => (dispatch) => {
	// debugger;
	let config = {
		method: "DELETE",
		Authorization: `Bearer ${localStorage.token}`,
	};

	fetch(`${BASE_URL}/${review.id}`, config)
		.then((res) => res.json())
		.then((data) => {
			dispatch(setCurrentReview(data));
			// let newRestaurantReviews = restaurantReviews.filter(
			// 	(reviews) => reviews.id !== data.id
			// );
			// dispatch(setRestaurantCurrentReviews(newRestaurantReviews));
		});
};

const editReviews = (userReview, review) => (dispatch) => {
	// debugger;
	let config = {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			Authorization: `Bearer ${localStorage.token}`,
		},
		body: JSON.stringify({
			comment: userReview.comment,
			user_id: review.user.id,
			restaurant_id: review.restaurant.id,
		}),
	};
	fetch("http://localhost:3001/reviews/" + review.id, config)
		.then((res) => res.json())
		.then((data) => {
			dispatch(setCurrentReview(data));
		});
};

const getRestaurantReviews = (restaurantID) => (dispatch) => {
	let restaurant = JSON.parse(restaurantID);
	let config = {
		headers: {
			Authorization: `Bearer ${localStorage.token}`,
		},
	};

	fetch(BASE_URL, config)
		.then((res) => res.json())
		.then((data) => {
			let reviews = data.filter(
				(review) => review.restaurant.id === restaurant.id
			);
			dispatch(setRestaurantCurrentReviews(reviews));
		});
};

const persistReviews = () => (dispatch) => {
	let config = {
		method: "GET",
		headers: {
			Authorization: `Bearer ${localStorage.token}`,
		},
	};
	let choseReviews = JSON.parse(localStorage.currentRestaurant);
	fetch(`${BASE_URL}`, config)
		.then((review) => review.json())
		.then((data) => {
			let restaurantReviews = data.filter(
				(review) => review.restaurant.id === choseReviews.id
			);
			dispatch(setReviews(restaurantReviews));
		});
};
export default {
	getReviews,
	postReviews,
	editReviews,
	currentReview,
	deleteReview,
	persistReviews,
	getRestaurantReviews,
};
