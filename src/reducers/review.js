const initialState = {
	reviews: [],
	currentReview: {},
	restaurantReviews: [],
};

export const reviewReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case "GET_REVIEWS":
			return { ...state, reviews: payload };
		case "ADD_REVIEW":
			return { ...state, currentReview: payload };
		case "EDIT_REVIEW":
			return { ...state, currentReview: payload };
		case "SET_RESTAURANT_REVIEWS":
			return { ...state, restaurantReviews: payload };

		default:
			return state;
	}
};
