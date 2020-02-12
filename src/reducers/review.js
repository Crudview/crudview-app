const initialState = {
	reviews: []
};

export const reviewReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case "ADD_REVIEW":
			return { ...state, reviews: payload };
		case "EDIT_REVIEW":
			return { ...state, reviews: payload };
		case "DELETE_REVIEW":
			return { ...state, reviews: payload };
		default:
			return state;
	}
};
