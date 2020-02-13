const initialState = {
	reviews: [],
	currentReview: {}
};

export const reviewReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case "GET_REVIEWS":
			return { ...state, reviews: payload };
		case "ADD_REVIEW":
			return { ...state, currentReview: payload };
		case "EDIT_REVIEW":
			return { ...state, currentReview: payload };

		default:
			return state;
	}
};
